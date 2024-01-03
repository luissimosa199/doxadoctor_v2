import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import UsersCard from "@/components/UsersCard";
import { useEffect, useMemo, useState } from "react";
import UserFilterContainer from "@/components/UserFilterContainer";
import UserListSkeleton from "@/components/UserListSkeleton";
import { UserInterface } from "@/types";
import React from "react";

const Usuarios = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [nameFilter, setNameFilter] = useState("");
  const [filterByFavorites, setFilterByFavorites] = useState<boolean>(false);
  const [filterOnline, setFilterOnline] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = async (page = 1) => {
    const tagsQuery = selectedTags.map((tag) => `tags=${tag}`).join("&");
    const nameQuery = nameFilter ? `name=${nameFilter}` : "";

    const url = `/api/user?${tagsQuery}&${nameQuery}&page=${page}&limit=10`;

    const response = await fetch(url, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    setHasMore(data.length === 10);
    return data;
  };

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(
    ["users", selectedTags, nameFilter, filterByFavorites, filterOnline],
    ({ pageParam = 1 }) => fetchUsers(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (hasMore) return allPages.length + 1;
        return undefined;
      },
    }
  );

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = 700;

      if (
        window.innerHeight + document.documentElement.scrollTop <
        document.documentElement.offsetHeight - triggerHeight
      )
        return;

      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const {
    data: favorites,
    isLoading: favoritesLoading,
  }: { data: string[] | undefined; isLoading: boolean } = useQuery(
    ["favorites", "all"],
    async () => {
      const response = await fetch(`/api/user/favorites`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Could not fetch favorites");
      }
    }
  );

  useEffect(() => {
    refetch();
  }, [selectedTags, nameFilter, filterByFavorites, refetch]);

  const displayedUsers = useMemo(() => {
    // Flatten the array of pages into a single array of users
    const allUsers = data?.pages.flatMap((page) => page);

    // Apply the filtering
    let filteredUsers = allUsers;
    if (filterByFavorites && favorites) {
      filteredUsers = filteredUsers?.filter((user: UserInterface) =>
        favorites.includes(user.email)
      );
    }
    if (filterOnline) {
      filteredUsers = filteredUsers?.filter(
        (user: UserInterface) => user.online
      );
    }

    // Sort users so that online users come first
    filteredUsers?.sort((a: UserInterface, b: UserInterface) => {
      if (a.online && !b.online) {
        return -1; // a comes before b
      }
      if (!a.online && b.online) {
        return 1; // b comes before a
      }
      return 0; // no change in order
    });

    return filteredUsers;
  }, [data?.pages, favorites, filterByFavorites, filterOnline]);

  if (isLoading) return <UserListSkeleton />;

  if (error) return <p>Error</p>;

  console.log(data);

  return (
    <div className={`bg-zinc-50 md:p-8`}>
      <div className="w-full mb-4 max-w-4xl mx-auto">
        <div className="">
          <UserFilterContainer
            filterByFavorites={filterByFavorites}
            setFilterByFavorites={setFilterByFavorites}
            setSelectedTags={setSelectedTags}
            setFilterOnline={setFilterOnline}
            selectedTags={selectedTags}
            filterOnline={filterOnline}
          />
          {/* <AsideMenu /> */}
        </div>

        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="p-2 mt-4 w-full border rounded"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>

      <ul className="flex flex-wrap gap-8 justify-around w-full mt-4">
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {Array.isArray(group)
              ? group.map((user: UserInterface, idx: number) => (
                  <UsersCard
                    key={idx}
                    user={user}
                    favoritesLoading={favoritesLoading}
                    isFavorites={
                      Array.isArray(favorites) && favorites.includes(user.email)
                    }
                  />
                ))
              : null}
          </React.Fragment>
        ))}
      </ul>
      {isFetchingNextPage && <p>Cargando...</p>}
    </div>
  );
};

export default Usuarios;
