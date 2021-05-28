window.onload = function() {
    let chart = new CanvasJS.Chart("java", {
        backgroundColor:"transparent",
        animationEnabled: true,
        title:{
            text: "Java",
            horizontalAlign: "center"
        },
        data: [{
            type: "doughnut",
            startAngle: 30,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            toolTipContent: "<b>{label}</b> = #percent%",
            dataPoints: [
                { y: 50, label:"java", color: "blue"},
                { y: 50, color: "transparent"}
            ]
        }]
        
    });
    chart.render();
    
}

window.addEventListener('load', () => {
    let chart = new CanvasJS.Chart("html", {
        backgroundColor:"transparent",
        animationEnabled: true,
        title:{
            text: "html | css | js",
            horizontalAlign: "center"
        },
        data: [{
            type: "doughnut",
            startAngle: 30,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            toolTipContent: "<b>{label}</b> = #percent%",
            dataPoints: [
                { y: 50, label:"html", color: "green"},
                { y: 30, label:"css", color: "blue"},
                { y: 20, label:"js", color: "purple"}
            ]
        }]
        
    });
    chart.render();
    
});

window.addEventListener('load', () => {
    let chart = new CanvasJS.Chart("oracle", {
        backgroundColor:"transparent",
        animationEnabled: true,
        title:{
            text: "Oracle",
            horizontalAlign: "center"
        },
        data: [{
            type: "doughnut",
            startAngle: 30,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            toolTipContent: "<b>{label}</b> = #percent%",
            dataPoints: [
                { y: 30, label:"oracle", color: "black"},
                { y: 15, label:"mybatis", color: "yellow"},
                { y: 55, color: "transparent"}
            ]
        }]
        
    });
    chart.render();
    
});

