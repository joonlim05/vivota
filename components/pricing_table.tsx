export default function PricingTable() {
  const pricingData = [
    {
      name: "Diagnostic",
      color: "text-white",
      pricing: [
        { original: null, discounted: "Free of Charge" }
      ],
      description: "1 trial lesson x 2h"
    },
    {
      name: "Standard",
      color: "text-orange-400",
      pricing: [
        { original: "$375", discounted: "$288" },
        { original: "$700", discounted: "$488" },
        { original: "$1000", discounted: "$688" },
        { original: "$1300", discounted: "$888" }
      ],
      description: "4 lessons x 2h",
      promo: "CNY Promo 🍊"
    },
  ];

  const subjects = ["1 Subject", "2 Subjects", "3 Subjects", "4 Subjects"];

  return (
    <div className="flex items-center justify-center">
      <div className="bg-neutral-800 rounded-2xl shadow-xl p-8 max-w-6xl w-full">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center tracking-wide">
          Vivota Class Pricing
        </h2>
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-center text-yellow-500 my-4 tracking-wide text-nowrap">
           🧨 1-16 Feb CNY Promo! 🧨 
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="py-4 px-6 text-left font-semibold">
                  No. of Subjects
                </th>
                {subjects.map((subject) => (
                  <th key={subject} className="py-4 px-6 text-center font-semibold">
                    {subject}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pricingData.map((classType, idx) => (
                <tr
                  key={classType.name}
                  className={`${idx < pricingData.length - 1 ? 'border-b border-slate-100' : ''}`}
                >
                  <td className="py-6 px-6 font-medium">
                    <div className="flex flex-col items-center gap-2">
                      <div>
                        <p className="inline text-lg md:text-xl xl:text-2xl font-bold">{classType.name}</p>
                      </div>
                      <p className="">{classType.description}</p>
                      {classType.promo && <span className="text-yellow-500">{classType.promo}</span>}
                    </div>
                  </td>
                  {classType.name === "Diagnostic" ? (
                    <td colSpan={4} className="py-6 px-6 text-center text-lg md:text-xl xl:text-2xl">
                      <span className={`${classType.color}`}>
                        {classType.pricing[0].discounted}
                      </span>
                    </td>
                  ) : (
                    classType.pricing.map((price, i) => (
                      <td key={i} className="py-6 px-6 text-center">
                        <div className="flex flex-col items-center">
                          <div className="space-x-2">
                            <span className={`text-lg md:text-xl xl:text-2xl font-bold ${price.discounted ? "line-through" : ""}`}>
                              {price.original}
                            </span>
                            {price.discounted && (
                              <span className={`text-lg md:text-xl xl:text-2xl font-bold ${classType.color}`}>
                                {price.discounted}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                    ))
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 text-center text-sm text-slate-300">
          <p>All prices shown are subjected to current promotional rates</p>
        </div>
      </div>
    </div >
  );
}