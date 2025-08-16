export interface SlideItem {
  year: number;
  text: string;
}

export interface SlideData {
  number: number;
  title: string;
  periodStart: number;
  periodEnd: number;
  slides: SlideItem[];
}


export const slides: SlideData[] = [
    {
        number: 1,
        title: "Литература",
        periodStart: 1992,
        periodEnd: 1997,
        slides: [
            { year: 1992, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1994, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1995, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1997, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
        ]
    },
    {
        number: 2,
        title: "Кино",
        periodStart: 1998,
        periodEnd: 1999,
        slides: [
            { year: 1998, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1999, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1999, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1999, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
        ]
    },
    {
        number: 3,
        title: "Наука",
        periodStart: 2000,
        periodEnd: 2003,
        slides: [
            { year: 2000, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 2001, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 2001, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 2003, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
        ]
    },
    {
        number: 4,
        title: "Литература",
        periodStart: 2004,
        periodEnd: 2010,
        slides: [
            { year: 2004, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 2007, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 2008, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 2010, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
        ]
    },
    {
        number: 5,
        title: "Литература",
        periodStart: 1992,
        periodEnd: 1997,
        slides: [
            { year: 1992, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1994, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1995, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
            { year: 1997, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis diam nisi. Quisque felis purus," },
        ]
    },
    {
        number: 6,
        title: "Литература",
        periodStart: 2030,
        periodEnd: 9999,
        slides: [
            { year: 2030, text: "Only придумавает SkyNet." },
            { year: 2050, text: "Вторжение терминаторов модели Т-1000 на планету Земля." },
            { year: 2052, text: "Лидер сопротивления (HR Only) смог остановить войну." },
            { year: 9999, text: "Всё равно все там будем :(" },
        ]
    },
]