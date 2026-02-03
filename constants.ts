
import type { Category } from './types';
import { 
    HomeIcon, BriefcaseIcon, HeartIcon, UsersIcon, SparklesIcon,
    TicketIcon, GiftIcon, ShoppingBagIcon, FaceSmileIcon, ShieldCheckIcon,
    HomeModernIcon
} from './components/IconComponents';

export const APP_NAME = "Hispabot Noticias";

export const CATEGORIES: Category[] = [
  { id: "general", name: "Destacados", icon: HomeIcon },
  { id: "migracion", name: "Migración", icon: UsersIcon },
  { id: "empleo", name: "Empleo", icon: BriefcaseIcon },
  { id: "vivienda", name: "Rentas", icon: HomeModernIcon },
  { id: "salud", name: "Salud", icon: HeartIcon },
  { id: "cultura", name: "Cultura", icon: SparklesIcon },
  { id: "actividades", name: "Actividades", icon: TicketIcon },
  { id: "comida-gratis", name: "Comida Gratis", icon: GiftIcon },
  { id: "ropa-gratis", name: "Ropa Gratis", icon: ShoppingBagIcon },
  { id: "bienestar", name: "Bienestar", icon: FaceSmileIcon },
];

export const PREMIUM_CATEGORY_ID = "analisis-premium";
export const PREMIUM_CATEGORY_NAME = "Análisis (Premium)";
export const VERIFIER_PATH = "/verifier";
export const VERIFIER_NAME = "Verificador";

export const GEMINI_MODEL_TEXT = 'gemini-3-flash-preview';

export const ARTICLES_TO_GENERATE_PER_CATEGORY = 3;
export const ARTICLES_TO_GENERATE_FOR_SPECIFIC_CAT = 3;

export const MASTER_DOCUMENT_CONTENT = `
DOCUMENTO MAESTRO: BOLSA DE TRABAJO Y RENTAS WP NEWS (ENERO 2026)

PARTE 1: OPORTUNIDADES DE EMPLEO (JOBS)
Restaurantes y Hospitalidad:
- Restaurante Turco (White Plains): Mesero/a. Inglés. 12pm-10pm. Tel: 914-327-6273.
- Pizzería (Rye): Mostrador. Inglés, pedidos, cortar pizzas. Tel: 917-384-3160.
- Deli (Thornwood): Mostrador. 5+ años exp. Tiempo completo/fines de semana. Tel: 845-803-3598.
- Mirage Café (New Rochelle): Servidores. En persona 690 North Ave (3pm-5pm).
- Emiliano's (Riverdale): 3 puestos (Ayudante cocina/Lavaplatos). Hablar con Emiliano. Tel: 646-644-8952.
- Arturo's Pizza (Bronx): Trabajador. Tel: 914-312-5222.
- Pizzería (Manhattan): Pizzero/Hacer masa. Email: 1739marketdeli@gmail.com.
- Coffee House (Queens): Barista/Cajero. En persona 4501 Greenpoint Ave, Sunnyside.
- Chuck's Steak (Danbury, CT): Mesero/Cocinero. 3+ años exp. En persona.
- Pizzería (Bridgeport, CT): Gerente/Bartender/Personal para mostrador. Tel: 203-515-8690.

Servicios, Limpieza y Oficios:
- Remodelación (Yonkers): Trabajador con exp en baños, Tax ID, herramientas y transporte propio. Tel: 914-588-0222.
- Two Maids (White Plains): Limpieza de casas. Tel: 914-902-8777.
- Dry Cleaner (Tarrytown): 4 vacantes (Planchar, Empacar, Mostrador, Quitar manchas). Poco inglés y Tax ID. Llamar a Daniel: 201-978-7935.
- Maid Brigade (White Plains): Coordinadora. Bilingüe, atención cliente. Tel: 914-741-0552.
- Limpieza (White Plains): Mujer con exp, jornada completa. Tel: 914-227-1896.
- Costurera (White Plains): Cortinas y forrar muebles. Llamar a Karen: 914-949-2717.
- Limpieza de Casa (Lunes/Viernes): Con exp. ENVIAR SOLO TEXTO: 914-262-6186.
- Handyman (Yonkers/Bronx): Reparación apartamentos. Licencia conducir y herramientas. Tel: 914-338-9280.

PARTE 2: ALQUILERES Y VIVIENDA (RENTALS)
Cuartos en White Plains:
- Entrada independiente: 1 persona, baño propio. Tel: 914-888-7159.
- Baño compartido: 1 o 2 personas. Acceso cocina/baño. Tel: 914-415-2048.
- Para pareja: Cocina, baño y utilidades incluidas. $1,500. Tel: 914-387-2976.
- Para hombre: Baño y utilidades. $950 (Con parqueo $1,100). Tel: 914-387-2976.
- Cerca del tren: 1 hombre, baño, salida privada. Amueblado con refrigerador. Tel: 914-309-9586.

Apartamentos y Estudios:
- White Plains: Estudio en basement para pareja. No niños/animales. Incluye parqueo. Tel: 914-473-6790.
- White Plains: 2 cuartos amueblados. Disponible 1 febrero. Tel: 914-319-7759.
- Harrison: 2 cuartos. $2,795. Tel: 646-350-0494.
- New Rochelle: 1 cuarto en Winthrop Ave (Basement). $1,800. Tel: 914-414-8307.
- Yonkers: 1 cuarto en Brewster Ave. $1,750. Tel: 646-478-6547.
- Mount Vernon: 2 cuartos en Locust St. $2,500. Tel: 718-496-4978.

INSTRUCCIONES CRÍTICAS:
1. Si un usuario pregunta "trabajo limpieza", Hispabot DEBE dar los números de Two Maids (914-902-8777) y el contacto de Daniel (201-978-7935).
2. IMPORTANTE: Antes de dar un teléfono, Hispabot debe aclarar si es "solo texto" o "llamada" según el documento.
`;
