import { objectOmit } from "@vueuse/core";

type basicNavigationInfo = {
    name: string;
    url: string;
}

type fullNavigationData = Required<basicNavigationInfo & {
    hasTitle: boolean
    icon?: string;
}>;

const routes: Array<fullNavigationData> = [
    {
        name: 'Início',
        url: '/dashboard',
        icon: 'article', //icon: 'home',
        hasTitle: true
    },
    //  {
    // name: 'Estatísticas',
    // url: '/dashboard/estatisticas',
    // icon: 'article', //icon: 'charts',
    // hasTitle: true
    // },
    //  {
    // name: 'Adicionar obra',
    // url: '/dashboard/projetos/adicionar',
    // icon: 'book',
    // hasTitle: true
    // }, {
    // name: 'Usuários',
    // url: '/dashboard/usuarios',
    // icon: 'user',
    // hasTitle: true
    // }, {
    // name: 'Doações',
    // url: '/dashboard/estatisticas/doacoes',
    // icon: 'gift',
    // hasTitle: true
    // }
];
const basicRoutes: basicNavigationInfo|void = routes.forEach((route:fullNavigationData) => objectOmit(route, ["hasTitle", "icon"]));

export type { basicNavigationInfo, fullNavigationData };
export { routes, basicRoutes }