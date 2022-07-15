// import Chart from "react-apexcharts";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const LineChart = () => {
  let state = {
    options: {
      chart: {
        id: "basic-bar",
        type: "line",
        width: "100%",
        fontFamily: "Poppins",
        toolbar: { show: false },
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        fontSize: "10px",
        fontFamily: "Poppins",
        labels: {
          colors: ["#FFF"],
          useSeriesColors: false,
        },
      },
      stroke: {
        curve: "smooth",
        curve: "smooth",
        lineCap: "butt",
        width: 3,
        dashArray: 0,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: [
          "10:59PM",
          "11:59PM",
          "12:59PM",
          "1:59PM",
          "2:59PM",
          "3:59PM",
          "4:59PM",
          "5:59PM",
          "6:59PM",
          "7:59PM",
        ],
        labels: {
          style: {
            colors: [
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
            ],
          },
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
          color: "#ffffff",
        },
        axisTicks: {
          show: true,
          borderType: "solid",
          color: "#ffffff",
          width: 6,
          offsetX: 0,
          offsetY: 0,
        },
        labels: {
          style: {
            colors: [
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
              "#ffffff",
            ],
          },
        },
      },
      colors: ["#FB49C0", "#31AFD6", "#F5A623"],
    },
    series: [
      {
        name: "BTC",
        data: [2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000],
      },
      {
        name: "ETH",
        data: [1000, 2200, 3800, 3900, 4100, 4550, 5400, 5500, 6200],
      },
      {
        name: "LTC",
        data: [2111, 2511, 1111, 3511, 4111, 4111, 5111, 5111, 6111],
      },
    ],
  };

  return (
    <div className="w-full mt-5 text-black h-fit">
      <Chart options={state.options} series={state.series} />
    </div>
  );
};

export default LineChart;
