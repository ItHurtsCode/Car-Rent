import { CustomFilter, SearchBar, Hero, CarCard } from "@/components";
import { FilterProps, HomeProps } from "@/types";
import { fetchCars } from "@/utils";
import Image from "next/image";


export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars

  console.log(allCars)
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="max-w mt-12 padding-x padding-y" id="discover">
        <h1 className="text-4xl font-extrabold">Каталог машин</h1>
        <p>Ищите автомобили которые вам бы понравились!</p>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFilter  />
            <CustomFilter  />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => 
              <CarCard car={car}/>
              )}
            </div>
          </section>
        ) :
        <div className="home__error-container">
          <h2 className="text-blackl text-xl font-bold">Ничего не найдено</h2>
          <p>{allCars?.message}</p>
        </div>
      }

      </div>  
    </main>
  );
}
