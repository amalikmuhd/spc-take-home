import React, { createContext, useState, useContext, useEffect, PropsWithChildren } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Item } from "../types";

interface BookmarkContextProps {
  bookmarkedItems: Item[];
  toggleBookmark: (item: Item) => void;
  isBookmarked: (item: Item) => boolean;
}

const BookmarkContext = createContext<BookmarkContextProps | undefined>(undefined);

export const BookmarkProvider: React.FC = ({ children }) => {
  const [bookmarkedItems, setBookmarkedItems] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      const storedBookmarks = await AsyncStorage.getItem("bookmarkedItems");
      if (storedBookmarks) {
        setBookmarkedItems(JSON.parse(storedBookmarks));
      }
    })();
  }, []);

  const toggleBookmark = async (item: Item) => {
    let updatedBookmarks;
    if (bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.id === item.id)) {
      updatedBookmarks = bookmarkedItems.filter((bookmarkedItem) => bookmarkedItem.id !== item.id);
    } else {
      updatedBookmarks = [...bookmarkedItems, item];
    }
    setBookmarkedItems(updatedBookmarks);
    await AsyncStorage.setItem("bookmarkedItems", JSON.stringify(updatedBookmarks));
  };

  const isBookmarked = (item: Item) => bookmarkedItems.some((bookmarkedItem) => bookmarkedItem.id === item.id);

  return (
    <BookmarkContext.Provider value={{ bookmarkedItems, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = (): BookmarkContextProps => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
