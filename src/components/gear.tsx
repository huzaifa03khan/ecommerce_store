import React from 'react'

const gear = () => {
  return (
    <div className="flex flex-col max-w-[666px] mt-16 justify-center" role="region" aria-label="Shop Men's Section">
  <div
    className="flex gap-3 self-end pl-2 max-w-full text-base font-medium leading-relaxed text-neutral-900 w-[211px]"
  >
    <div className="grow my-auto">Shop Men's</div>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b89f15a5949eac5b03292ee792c78520a64a0ca7cc8f5c35563f016131e987d7?placeholderIfAbsent=true&apiKey=bc1a4ad9cfba4dacb76e8cf0c6955c57"
      className="object-contain shrink-0 w-12 rounded-3xl aspect-square"
      alt="Men's clothing category thumbnail 1"
    />
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3686ddd76ca9b470d7b85cb193c141e17da9afaf8c21f18a12866fb894f801e9?placeholderIfAbsent=true&apiKey=bc1a4ad9cfba4dacb76e8cf0c6955c57"
      className="object-contain shrink-0 w-12 rounded-3xl aspect-square"
      alt="Men's clothing category thumbnail 2"
    />
  </div>
  <div
    className="flex overflow-hidden flex-col px-12 pb-14 mt-3 w-full max-md:pl-5 max-md:max-w-full"
  >
    <div className="flex flex-wrap gap-3 items-start justify-between max-md:max-w-full">
      <div 
        className="flex flex-col self-stretch my-auto min-w-[240px] w-[300px]"
        role="article"
      >
        <div className="flex flex-col w-full">
          <img
            loading="lazy"
            src="men-1.png"
            className="object-contain w-full aspect-square"
            alt="Nike Dri-FIT ADV TechKnit Ultra Running Top"
          />
          <div className="flex gap-1 mt-5 max-w-full bg-white w-[284px]">
            <div className="flex flex-col pr-3.5">
              <div
                className="text-base font-medium leading-relaxed text-neutral-900"
              >
                Nike Dri-FIT ADV TechKnit Ultra
              </div>
              <div className="text-base leading-6 text-neutral-500">
                Men's Short-Sleeve Running Top
              </div>
            </div>
            <div
              className="self-start text-base font-medium leading-relaxed text-right text-neutral-900"
              aria-label="Price"
            >
              ₹ 3 895
            </div>
          </div>
        </div>
      </div>
      <div 
        className="flex flex-col self-stretch my-auto min-w-[240px] w-[300px]"
        role="article"
      >
        <div
          className="flex z-10 gap-2.5 items-center py-2.5 pr-1.5 pl-2.5 max-md:-mr-1.5" >
          <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[300px]">
            <img
              loading="lazy"
              src="men-2.png"
              className="object-contain w-full aspect-square"
              alt="Nike Dri-FIT Challenger Versatile Shorts"
            />
            <div className="flex gap-1 mt-5 max-w-full bg-white w-[284px]">
              <div className="flex flex-col pr-8">
                <div
                  className="text-base font-medium leading-relaxed text-neutral-900"
                >
                  Nike Dri-FIT Challenger
                </div>
                <div className="text-base leading-6 text-neutral-500">
                  Men's 18cm (approx.) 2-in-1 Versatile Shorts
                </div>
              </div>
              <div
                className="self-start text-base font-medium leading-relaxed text-right text-neutral-900"
                aria-label="Price"
              >
                ₹ 2 495
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default gear