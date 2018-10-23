export class ChartData {
    datasets: DatasetsChartJs[];
    options: OptionsChartJs;

  constructor(data: any[], borderColor?: string, hoverBackgroundColor?: string, titleDisplay?: boolean, titleText?: string, titleFontSize?: number) {
    this.datasets.push(new DatasetsChartJs(data, borderColor, hoverBackgroundColor));
    this.options = new OptionsChartJs(titleDisplay, titleText, titleFontSize);
  }
}

export class DatasetsChartJs {
    data: any[];
    borderColor: string;
    hoverBackgroundColor: string;

  constructor(data: any[], borderColor?: string, hoverBackgroundColor?: string) {
    this.data = data;
    this.borderColor = borderColor;
    this.hoverBackgroundColor = hoverBackgroundColor;
  }
}

export class OptionsChartJs {
    title: any = {};

  constructor(display?: boolean, text?: string, fontSize?: number) {
    this.title.display = display;
    this.title.text = text;
    this.title.fontSize = fontSize;
  }
}
