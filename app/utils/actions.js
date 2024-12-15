import { getHomeData } from "@/services/ApiHandler"


export async function fetchHomeDate() {
    try {
      const {data} = await getHomeData(); // Ensure API call is awaited
      return data?.data;
    } catch (error) {
      console.error("🚀 ~ fetchHomeDate ~ Error fetching data:", error);
      throw new Error("Failed to fetch home data");
    }
  }