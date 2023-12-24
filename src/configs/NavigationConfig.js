import { 
  DashboardOutlined, ShoppingCartOutlined, ShoppingOutlined,
  UserOutlined, PictureOutlined, GiftOutlined, ShopOutlined,
  UsergroupAddOutlined, MailOutlined, SettingOutlined,
  MobileOutlined, FileTextOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'Основные',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'Дашборд',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'Каталог',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-catalog-goods',
          path: `${APP_PREFIX_PATH}/main/catalog/goods`,
          title: 'Товары',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-categories',
          path: `${APP_PREFIX_PATH}/main/catalog/categories`,
          title: 'Категории',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-collections',
          path: `${APP_PREFIX_PATH}/main/catalog/collections`,
          title: 'Коллекции',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'Комбо',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'Заказы',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'Клиенты',
      icon: UserOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-clients-list',
          path: `${APP_PREFIX_PATH}/main/clients/list`,
          title: 'Список клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-clients-groups',
          path: `${APP_PREFIX_PATH}/main/clients/groups`,
          title: 'Группы клиентов',
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'Баннеры',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promocodes',
      path: `${APP_PREFIX_PATH}/main/promocodes`,
      title: 'Промокоды',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offices',
      path: `${APP_PREFIX_PATH}/main/offices`,
      title: 'Оффлайн точки',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offices-addresses',
          path: `${APP_PREFIX_PATH}/main/offices/addresses`,
          title: 'Адреса',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offices-geofences',
          path: `${APP_PREFIX_PATH}/main/offices/geofences`,
          title: 'Геозоны', 
          icon: '',
          breadcrumb: false,
          submenu: []
        }
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'Сотрудники',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-mailings',
      path: `${APP_PREFIX_PATH}/main/mailings`,
      title: 'Рассылки',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const systemicNavTree = [{
  key: 'systemic',
  path: `${APP_PREFIX_PATH}/systemic`,
  title: 'Системные',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'systemic-settings',
      path: `${APP_PREFIX_PATH}/systemic/settings`,
      title: 'Настройки',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systemic-mobileapp',
      path: `${APP_PREFIX_PATH}/systemic/mobileapp`,
      title: 'Мобильное приложение',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'systemic-logs',
      path: `${APP_PREFIX_PATH}/systemic/logs`,
      title: 'Логи',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    },
  ]
}]

const navigationConfig = [
  ...mainNavTree, 
  ...systemicNavTree
]

export default navigationConfig;
