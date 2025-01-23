import { StaticImageData } from "next/image";

interface CourseCardProps {
  title: string;
  subtitle: string;
  image: StaticImageData;
  price: number;
  originalPrice: number;
}

const CourseCard = ({
  title,
  subtitle,
  image,
  price,
  originalPrice,
}: CourseCardProps) => {
  return (
    <div className="bg-defult-100 border shadow-md rounded-lg overflow-hidden w-full max-w-sm">
      <div className="relative">
        <img src={image.src} alt={title} className="w-full h-36 object-cover" />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-blue-500">Course</div>
        <h2 className="text-lg font-bold text-defult-100 mt-2">{title}</h2>
        <p className="text-sm text-defult-100 mt-1">{subtitle}</p>
        <div className="mt-4 flex items-center space-x-2">
          <span className="text-green-500 font-bold">${price}</span>
          <span className="text-gray-400 line-through">${originalPrice}</span>
        </div>
        <button className="mt-4 w-full py-2 px-4 bg-primary text-defult-100 font-semibold rounded-md hover:bg-blue-600 transition duration-200">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
