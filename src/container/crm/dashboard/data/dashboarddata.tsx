import ReactApexChart from 'react-apexcharts';
import React, { Component } from 'react';

//chart1(Active clients)
export class Spark1 extends Component<{}, { options: any, series: any }>{
    constructor(props: any) {
        super(props);

        this.state = {

            series: [{
                name: 'Total Revenue',
                data: [50, 58, 42, 48, 54, 37, 48]
            }],
            options: {
                chart: {
                    height: 50,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true,
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 1,
                        left: 0,
                        blur: 1,
                        color: '#1467df',
                        opacity: 0.2
                    },
                    events: {
                      mounted: (chart:any) => {
                        chart.windowResizeHandler();
                      }
                    },
                },
                grid: {
                    show: false,
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                xaxis: {
                    crosshairs: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ["#1467df"],
                stroke: {
                    width: [2],
                    curve: 'smooth'
                },
               
            },

        };
    }
    render() {
        return (

            <div id="spark1">
                <ReactApexChart options={this.state.options} series={this.state.series} height={50} />

            </div>
        );
    }
}

// Revenuechart (Total revenue)
export class Revenuechart extends Component<{}, { options: any, series: any }>{
    constructor(props: any) {
        super(props);
        this.state = {
            series: [{
                name: "revenue",
                data: [52, 48, 60, 50, 41, 52, 37]
            }],
            options: {
                chart: {
                    height: 50,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    events: {
                      mounted: (chart:any) => {
                        chart.windowResizeHandler();
                      }
                    },
                    sparkline: {
                        enabled: true,
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 1,
                        left: 0,
                        blur: 1,
                        color: '#fdc530',
                        opacity: 0.2
                    }
                },
                grid: {
                    show: false,
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                xaxis: {
                    crosshairs: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['#fdc530'],
                stroke: {
                    width: [2],
                    curve: 'smooth'
                },

            },

        };
    }
    render() {
        return (

            <div id="spark1">
                <ReactApexChart options={this.state.options} series={this.state.series} height={50} />

            </div>
        );
    }
}

//Saleschart(Total Sales)
export class Saleschart extends Component<{}, { options: any, series: any }>{
    constructor(props: any) {
        super(props);

        this.state = {

            series: [{
                name: 'Total Revenue',
                data: [50, 58, 42, 48, 64, 37, 48]
            }],
            options: {
                chart: {
                    height: 50,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true,
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 1,
                        left: 0,
                        blur: 1,
                        color: '#21C197',
                        opacity: 0.2
                    },
                    events: {
                      mounted: (chart:any) => {
                        chart.windowResizeHandler();
                      }
                    },
                },
                grid: {
                    show: false,
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                xaxis: {
                    crosshairs: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['#21C197'],
                stroke: {
                    width: [2],
                    curve: 'smooth'
                },
            },

        };
    }
    render() {
        return (

            <div id="spark1">
                <ReactApexChart options={this.state.options} series={this.state.series} height={50} />

            </div>
        );
    }
}

// Totaldeals (Total revenue)
export class Totaldeals extends Component<{}, { options: any, series: any }>{
    constructor(props: any) {
        super(props);

        this.state = {

            series: [{
                name: 'Total Revenue',
                data: [30, 58, 42, 48, 64, 37, 48]
            }],
            options: {
                chart: {
                    height: 50,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true,
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 1,
                        left: 0,
                        blur: 1,
                        color: '#E63D59',
                        opacity: 0.2
                    },
                    events: {
                      mounted: (chart:any) => {
                        chart.windowResizeHandler();
                      }
                    },
                },
                grid: {
                    show: false,
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                xaxis: {
                    crosshairs: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['#E63D59'],
                stroke: {
                    width: [2],
                    curve: 'smooth'
                },

            },

        };
    }
    render() {
        return (

            <div id="spark1">
                <ReactApexChart options={this.state.options} series={this.state.series} height={50}  />

            </div>
        );
    }
}

// projectsChart (Total Projects)
export class Projectschart extends Component<{}, { options: any, series: any }>{
    constructor(props: any) {
        super(props);

        this.state = {

            series: [{
                name: 'Total Revenue',
                data: [60, 35, 60, 50, 41, 52, 37]
            }],
            options: {
                chart: {
                    height: 50,
                    type: 'line',
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true,
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 1,
                        left: 0,
                        blur: 1,
                        color: '#00D4FF',
                        opacity: 0.2
                    },
                    events: {
                      mounted: (chart:any) => {
                        chart.windowResizeHandler();
                      }
                    },
                },
                grid: {
                    show: false,
                },
                dataLabels: {
                    enabled: false
                },
                title: {
                    text: undefined,
                },
                xaxis: {
                    crosshairs: {
                        show: false,
                    }
                },
                tooltip: {
                    x: {
                        show: false
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return '';
                            }
                        }
                    },
                    marker: {
                        show: false
                    }
                },
                colors: ['#00D4FF'],
                stroke: {
                    width: [2],
                    curve: 'smooth'
                },

                // colors: ['#00D4FF'],

            },

        };
    }
    render() {
        return (

            <div id="spark1">
                <ReactApexChart options={this.state.options} series={this.state.series} height={50}  />

            </div>
        );
    }
}

//Revenue Statistics
export class RevenueMain extends React.Component<{}, { options: any, series: any }>  {
    constructor(props: any) {
        super(props);

        this.state = {

            series: [{
                name: 'This Month',
                type: "column",
                data: [20, 30, 40, 20, 30, 40, 25, 35, 45, 20, 30, 40]
            }, {
                name: "Last Month",
                type: "area",
                data: [40, 50, 60, 30, 40, 55, 35, 55, 65, 40, 50, 60],
            }],
            options: {
                chart: {
                    redrawOnWindowResize: true,
                    height: 358,
                    type: 'bar',
                    toolbar: {
                        show: false
                    },
                    dropShadow: {
                        enabled: true,
                        enabledOnSeries: undefined,
                        top: 7,
                        left: 0,
                        blur: 2,
                        color: ["rgb(74, 119, 240)", '#fdc530'],
                        opacity: 0.1,
                    },
                    events: {
                      mounted: (chart:any) => {
                        chart.windowResizeHandler();
                      }
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '22%',
                        borderRadius: 10
                    },
                },
                grid: {
                    row: {
                        colors: ['rgb(74, 119, 240, 0.025)', 'rgba(253, 197, 48, 0.025)']
                    },
                    column: {
                        colors: ['rgb(74, 119, 240, 0.025)', 'rgba(253, 197, 48, 0.025)']
                    },
                    show: true,
                    borderColor: 'rgba(119, 119, 142, 0.1)',
                    strokeDashArray: 4,
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [0, 2],
                    curve: "smooth",
                    dashArray: [0, 5],
                },
                legend: {
                    show: true,
                    position: "top",
                    horizontalAlign: "center",
                    fontSize: "12px",
                    fontFamily: "Helvetica, Arial",
                    fontWeight: 600,
                    labels: {
                        colors: '#9ba5b7',
                    },

                    markers: {
                        width: 8,
                        height: 8,
                        strokeWidth: 0,
                        strokeColor: "#fff",
                        fillColors: ["rgb(74, 119, 240)", '#fdc530'],
                        radius: 2,
                        customHTML: undefined,
                        onClick: undefined,
                        offsetX: 0,
                        offsetY: 0,
                    },
                },
                markers: {
                    discrete: [{
                        seriesIndex: 1,
                        dataPointIndex: 2,
                        fillColor: '#fff',
                        strokeColor: '#fdc530',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#fff',
                        strokeColor: '#fdc530',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 8,
                        fillColor: '#fff',
                        strokeColor: '#fdc530',
                        size: 4,
                        shape: "circle"
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 11,
                        fillColor: '#fff',
                        strokeColor: '#fdc530',
                        size: 4,
                        shape: "circle"
                    }],
                    hover: {
                        sizeOffset: 6
                    }
                },
                colors: ["rgb(74, 119, 240)", '#fdc530'],
                yaxis: {
                    title: {
                        style: {
                            color: '#adb5be',
                            fontSize: '14px',
                            fontFamily: 'poppins, sans-serif',
                            fontWeight: 600,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                    },
                    labels: {
                        formatter: function (y:number) {
                            return y.toFixed(0) + "";
                        },
                        show: true,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                xaxis: {
                    type: "month",
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Agu', 'Sep', 'Oct', 'Nov', 'Dec'],
                    axisBorder: {
                        show: true,
                        color: 'rgba(119, 119, 142, 0.05)',
                        offsetX: 0,
                        offsetY: 0,
                    },
                    axisTicks: {
                        show: true,
                        borderType: 'solid',
                        color: 'rgba(119, 119, 142, 0.05)',
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                    },
                    labels: {
                        rotate: -90,
                        style: {
                            colors: "#8c9097",
                            fontSize: '11px',
                            fontWeight: 600,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                    }
                },
                fill: {
                    colors: undefined,
                    opacity: 0.025,
                    type: ['solid', 'solid'],
                    gradient: {
                        shade: 'light',
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ['#fdc530'],
                        inverseColors: true,
                        opacityFrom: 0.35,
                        opacityTo: 0.05,
                        stops: [0, 50, 100],
                        colorStops: ['#fdc530']
                    }

                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y:any) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " points";
                            }
                            return y;
                        },
                    },
                    marker: {
                        fillColors: ['rgb(74, 119, 240)', '#fdc530']
                    }
                },
            },

        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        );
    }
}



