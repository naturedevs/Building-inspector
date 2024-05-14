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
		menutitle: 'asdf',
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
		menutitle: 'asdf',
		class: 'text-center',
	},
	{
		icon: (<i className="bi bi-card-list side_menu_img"></i>),
		type: "link",
		Name: '',
		active: false,
		selected: false,
		badge: '',
		badgetxt: '',
		class: ' ',
		title: "violations",
		path: `${import.meta.env.BASE_URL}violations`,
	},
	{
		icon: (<i className="bi bi-hammer side_menu_img"></i>),
		type: "link",
		Name: '',
		active: false,
		selected: false,
		badge: '',
		badgetxt: '',
		class: ' ',
		title: "tests",
		path: `${import.meta.env.BASE_URL}tests`,
	}


];
