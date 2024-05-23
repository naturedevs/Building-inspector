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
		menutitle: 'System',
		class: 'text-center',
	},
	{
		icon: (<i className="bi bi-house side_menu_img"></i>),
		type: 'link',
		Name: '',
		active: false,
		selected: false,
		title: 'Dashboard',
		badge: '',
		badgetxt: '',
		class: '',
		path: `${import.meta.env.BASE_URL}dashboard`,
	},
	{
		icon: (<i className="bi bi-person side_menu_img"></i>),
		type: 'link',
		Name: '',
		active: false,
		selected: false,
		title: 'Users',
		badge: '',
		badgetxt: '',
		class: '',
		path: `${import.meta.env.BASE_URL}users`,
	},
	{
		icon: (<i className="bx bx-user-check side_menu_img"></i>),
		type: 'link',
		Name: '',
		active: false,
		selected: false,
		title: 'Roles',
		badge: '',
		badgetxt: '',
		class: '',
		path: `${import.meta.env.BASE_URL}roles`,
	},
	{
		menutitle: 'Form',
		class: 'text-center',
	},
	{
		icon: (<i className="bi bi-card-checklist side_menu_img"></i>),
		type: "link",
		Name: '',
		active: false,
		selected: false,
		badge: '',
		badgetxt: '',
		class: ' ',
		title: "Forms",
		path: `${import.meta.env.BASE_URL}forms`,
	},
	{
		icon: (<i className="bi bi-card-checklist side_menu_img"></i>),
		type: "link",
		Name: '',
		active: false,
		selected: false,
		badge: '',
		badgetxt: '',
		class: ' ',
		title: "FormEditor",
		path: `${import.meta.env.BASE_URL}form`,
	},
	// {
	// 	icon: (<i className="bi bi-hammer side_menu_img hidden"></i>),
	// 	type: "link",
	// 	Name: '',
	// 	active: false,
	// 	selected: false,
	// 	badge: '',
	// 	badgetxt: '',
	// 	class: ' ',
	// 	title: "tests",
	// 	path: `${import.meta.env.BASE_URL}testseditor`,
	// },
	// {
	// 	icon: (<i className="bi bi-hammer side_menu_img hidden"></i>),
	// 	type: "link",
	// 	Name: '',
	// 	active: false,
	// 	selected: false,
	// 	badge: '',
	// 	badgetxt: '',
	// 	class: ' ',
	// 	title: "tests",
	// 	path: `${import.meta.env.BASE_URL}testseditor1`,
	// },
	// {
	// 	icon: (<i className="bi bi-hammer side_menu_img hidden"></i>),
	// 	type: "link",
	// 	Name: '',
	// 	active: false,
	// 	selected: false,
	// 	badge: '',
	// 	badgetxt: '',
	// 	class: ' ',
	// 	title: "tests",
	// 	path: `${import.meta.env.BASE_URL}tests`,
	// }


];
