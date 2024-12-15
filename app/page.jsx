import Home from './Home/page'
import { fetchHomeDate } from '@/utils/actions';

export const metadata = {
  title: " كشف تسريبات | الصفحة الرئيسية",
}

const Page = async () => {
    let data = {}
  try {    
      data = await fetchHomeDate();
    if (!data) {
        throw new Error("No data returned from fetchHomeDate");
    }
  } catch (error) {
    console.error('Error fetching home data:', error);
  }

  return <Home homeData={data} />;

}

export default Page;
