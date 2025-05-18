import cn from "../utils/cn";
import { models, sizes } from "../constants";

interface ColorAndSizeProps {
  model: any;
  setModel: any;
  currentSlideSize: string;
  setCurrentSlideSize: any;
}
const ColorAndSize = ({
  model,
  setModel,
  currentSlideSize,
  setCurrentSlideSize,
}: ColorAndSizeProps) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <h1 className="mb-4 text-gray font-medium">{model.title}</h1>
      <div className="flex items-center gap-2">
        <div className="gap-2 p-4 flex items-center justify-center rounded-full bg-gray-300 backdrop-blur overflow-x-hidden">
          {models.map((model, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: model.color[0] }}
              onClick={() => setModel(model)}
            />
          ))}
        </div>
        <button className="flex items-center justify-center p-1 rounded-full bg-gray-300 backdrop-blur ml-3 gap-1">
          {sizes.map(({ label, value }, i) => (
            <p
              key={i}
              className={cn(
                "w-10 h-10 text-sm flex justify-center items-center bg-transparent rounded-full transition-all",
                currentSlideSize == value && "bg-white text-black"
              )}
              onClick={() => setCurrentSlideSize(value)}
            >
              {label}
            </p>
          ))}
        </button>
      </div>
    </div>
  );
};

export default ColorAndSize;
