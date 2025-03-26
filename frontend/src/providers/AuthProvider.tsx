import { axiosInstance } from "@/lib/axios";
import { useAuth } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Loader } from "lucide-react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
   const { getToken, userId } = useAuth();
   const [loading, setLoading] = useState(true);

   const updateApiToken = (token: string | null) => {
      if (token) {
         axiosInstance.defaults.headers.common[
            "Authorization"
         ] = `Bearer ${token}`;
      } else {
         delete axiosInstance.defaults.headers.common["Authorization"];
      }
   };

   useEffect(() => {
      const initAuth = async () => {
         try {
            const token = await getToken();
            updateApiToken(token);
         } catch (error: any) {
            updateApiToken(null);
            console.log(error);
         } finally {
            setLoading(false);
         }
      };

      initAuth();
   }, [getToken]);

   if (loading)
      return (
         <div className="h-screen w-full flex items-center justify-center">
            <Loader className="size-8 text-emerald-500 animate-spin" />
         </div>
      );

   return <>{children}</>;
};

export default AuthProvider;
