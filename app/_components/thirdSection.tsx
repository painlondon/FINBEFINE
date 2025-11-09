// data config
const thirdSectionImages = [
  "/home/man-and-text.png",
  "/home/womans-and-text.png",
  "/home/percentages.png",
];

export const ThirdSection = () => {
  return (
    <div className="flex gap-6 flex-wrap ">
      {thirdSectionImages.map((img) => (
        <img
          src={img}
          className="w-[451px] lightShadow rounded-[10px] h-[280px]"
        />
      ))}
    </div>
  );
};
