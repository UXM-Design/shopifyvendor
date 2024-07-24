import React from "react";
import SideBar from "@/app/_components/sidebar/page";
import TopBar from "../_components/topBar";
import AnalyticCard from "../_components/analytic-card/page";
import OrderTable from "../_components/orders/orderTable";
import HeaderMenu from "../_components/headerMenu";

const Dashboard = () => {
  return (
    <div className="flex overflow-hidden w-full bg-[#f1f1f1]">
      <SideBar />
      <section className="w-full flex h-screen flex-col gap-4 justify-center items-center px-6">
        <TopBar />
        <AnalyticCard />
        <HeaderMenu />
        <OrderTable />
      </section>
    </div>
  );
};

export default Dashboard;
