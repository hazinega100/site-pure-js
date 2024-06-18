interface BaseDataItem<TType extends string, TPayload> {
    type: TType;
    payload: TPayload;
}

type Header = BaseDataItem<"header", { title: string }>;
type Sidebar = BaseDataItem<"sidebar", { sidebar: string[] }>;
type Content = BaseDataItem<"content", { title: string, items: string[] }>;
type Footer = BaseDataItem<"footer", { title: string }>;

export type DataItem = Header | Sidebar | Content | Footer;


export const data: DataItem[] = [
    {type: "header", payload: {title: "Header"}},
    {type: "sidebar", payload: {sidebar: ["Menu", "About", "Main", "Skills", "Works"]}},
    {
        type: "content", payload: {
            title: "Hello World on JS!",
            items: [
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, magni!",
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolorem, velit.",
                "Lorem ipsum dolor sit amet.",
                "Lorem ipsum dolor sit amet, consectetur adipisicing."
            ]
        }
    },
    {type: "footer", payload: {title: "Footer"}}
];

