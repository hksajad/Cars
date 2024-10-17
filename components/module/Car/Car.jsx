import carsData from "@/data/DataCars";
import Image from "next/image";

const Car = () => {
  return (
    <div className="flex justify-center max-w-[900px] m-auto items-center flex-wrap max-[768px]:max-w-full">
      {carsData.map((indexcar) => (
        <div className="items_cars flex flex-col flex-wrap ">
            {/* img cars */}
          <div className="img_cars max-[768px]:m-2">
            <Image src={indexcar.image} width={300} height={300} className="w-[250px] h-[250px] rounded-lg m-5 max-[768px]:w-full max-[768px]:m-auto"/>
          </div>
          {/* name cars */}
          <div className="name_cars  flex flex-col">
            <h1 className="text-center font-bold text-[20px]">{indexcar.name}</h1>
          </div>
          {/* location and prise */}
          <div className="location flex justify-around items-center mt-5 mb-5">
            <h1 className="bg-green-200 rounded-lg px-1 py-1">{indexcar.price}</h1>
            <h1>{indexcar.location}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Car;
