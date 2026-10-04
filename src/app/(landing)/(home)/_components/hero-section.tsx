export default function HeroSection() {
  return (
    <div className="flex flex-col justify-between gap-3">
      {/* title */}
      <div className="flex flex-col gap-2">
        <div className="flex">icon eyebrow</div>
        title 
        description
        <div className="flex">
            button
            <div className="flex">
              icon
              button
            </div>
            
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col">value lable</div>
          <div className="flex flex-col">value lable</div>
          <div className="flex flex-col">value lable</div>
        </div>
      </div>

      {/* image */}
      <div>photo</div>
    </div>
  );
}
