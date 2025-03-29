import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";

export const useMusicStore = create((set) => ({
   albums: [],
   songs: [],
   isLoading: false,
   error: null,

   fetchAlbum: async () => {
      set({
         isLoading: true,
         error: null,
      });

      try {
         const response = await axiosInstance.get("/albums");

         set({
            albums: response.data,
         });
      } catch (error: any) {
         set({
            error: error.response.data.message,
         });
      } finally {
         set({ isLoading: false });
      }
   },
}));
