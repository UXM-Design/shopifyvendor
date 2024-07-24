import React from "react";

const AnalyticCard = () => {
  const stats = [
    { id: 1, name: "Total Transactions", value: "44 million" },
    { id: 2, name: "Total Products", value: "25,000" },
    { id: 3, name: "Total Orders", value: "6,000" },
  ];

  return (
    <>
      <div className="bg-white py-16 sm:py-12 w-full rounded-lg">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base leading-7 text-gray-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </>
  );
};

export default AnalyticCard;
