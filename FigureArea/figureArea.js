
function figureArea(ip) {

    let y1 = Number(ip[0]);
    let x1 = Number(ip[1]);
    let y2 = Number(ip[2]);
    let x2 = Number(ip[3]);

    //calculating area of rectangle1
    let area1 = x1 * y1;
    //calculating area of rectangle2
    let area2 = x2 * y2;

    let rect1Left = x1;
    let rect1Right = x1 + x2;
    let rect1Top = y1;
    let rect1Bottom = y1 + y2;

    //computing rectangle1 and rectangle2 overlap area
    let rect2Left = x2;
    let rect2Right = x2 + x1;
    let rect2Top = y2;
    let rect2Bottom = y2 + y1;

    let x_overlap = Math.max(0, Math.min(rect1Right, rect2Right) - Math.max(rect1Left, rect2Left));
    let y_overlap = Math.max(0, Math.min(rect1Bottom, rect2Bottom) - Math.max(rect1Top, rect2Top));
    let overlapArea = x_overlap * y_overlap;

    //computing both rectangles areas, counting the overlap only once
    let result = area1 + area2 - overlapArea;

    console.log(result);
}

figureArea(['2', '4', '5', '3']);//17
figureArea(['13', '2', '5', '8']);//56