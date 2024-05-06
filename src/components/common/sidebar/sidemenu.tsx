export interface menu {
	Items?: menu[]
	title?: string
	icon?: JSX.Element
	type?: string
	selected?: boolean
	active?: boolean
	path?: string
	children?: menu[]
	badge?: string
	badgetxt?: string
}


export const MENUITEMS = [
	{
		menutitle: '',
	},
	{
		icon: (<i className="bi bi-house side_menu_img"></i>),
		type: 'sub',
		Name: '',
		active: false,
		selected: false,
		title: 'CRM',
		badge: '',
		badgetxt: '',
		class: '',
		children: [
			{ id: 3, path: `${import.meta.env.BASE_URL}crm/crmdashboard`, type: "link", active: false, selected: false, title: "Dashboard" },
		]
	},

	{
		menutitle: "",
	},
	{
		icon: (<i className="bx bx-layer side_menu_img"></i>),
		type: "sub",
		Name: '',
		active: false,
		selected: false,
		badge: '',
		badgetxt: '',
		class: ' ',
		title: "Nested Menu",
		children: [
			{
				path: `${import.meta.env.BASE_URL}crm/crmdashboard`,
				title: "Nested-1",
				type: "empty",
				active: false,
				selected: false,
			},
			{
				title: "Nested-2",
				type: "sub",
				selected: false,
				active: false,
				children: [
					{
						path: '',
						title: "Nested-2.1",
						type: "empty",
						active: false,
						selected: false,
					},
					{
						path: '',
						title: "Nested-2.2",
						type: "empty",
						active: false,
						selected: false,
					},

				],
			},
		],
	}


];
