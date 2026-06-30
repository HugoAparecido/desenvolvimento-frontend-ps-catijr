import { LinkButton } from "./components/ui/buttons/LinkButton";

function App() {
  return <>
    <section className="test bg-black">
      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-xs"
        colorClass="text-subdued"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
        fontHoverWeightClass="font-extrabold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-sm"
        colorClass="text-white"
        hoverColorClass="text-white"
        fontWeightClass="font-normal"
        fontHoverWeightClass="font-normal"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-normal"
        colorClass="text-subdued"
        hoverColorClass="text-white"
        fontWeightClass="font-semibold"
        fontHoverWeightClass="font-semibold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-xs"
        colorClass="text-white"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
        fontHoverWeightClass="font-semibold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-xs"
        colorClass="text-subdued"
        hoverColorClass="text-subdued"
        fontWeightClass="font-bold"
        fontHoverWeightClass="font-extrabold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-sm"
        colorClass="text-white"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
        fontHoverWeightClass="font-bold"
      />
    </section>
  </>;
}

export default App;
