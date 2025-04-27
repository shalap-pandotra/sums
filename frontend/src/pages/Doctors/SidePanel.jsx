const SidePanel = () => {
  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-[12.5px]">
      <div className="flex items-center justify-between">
        <p className="text__para mt-0 font-semibold">Booking price</p>
        <span className="leading-7 text-[16px] lg:text-[22px] lg:leading-8 text-headingColour font-bold">
          500 INR
        </span>
      </div>

      <div className="mt-[30px]">
        <p className="text__para mt-0 font-semibold text-headingColour">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          <li className="mb-2 flex items-center justify-between">
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              Monday
            </p>
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              4:00 PM - 8:00 PM
            </p>
          </li>

          <li className="mb-2 flex items-center justify-between">
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              Tuesday
            </p>
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              4:00 PM - 8:00 PM
            </p>
          </li>

          <li className="mb-2 flex items-center justify-between">
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              Wednesday
            </p>
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              4:00 PM - 8:00 PM
            </p>
          </li>

          <li className="mb-2 flex items-center justify-between">
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              Thursday
            </p>
            <p className="text-[15px] leading-6 text-textColour font-semibold">
              4:00 PM - 8:00 PM
            </p>
          </li>
        </ul>
      </div>

        <button className="btn px-2 w-full rounded-[12.5px]">Book a visit</button>

    </div>
  );
};

export default SidePanel;
