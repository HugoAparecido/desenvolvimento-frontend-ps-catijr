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
        colorClass="text-subdued"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
        fontHoverWeightClass="hover:font-bold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-xs"
        colorClass="text-subdued"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-xs"
        colorClass="text-subdued"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-xs"
        colorClass="text-subdued"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
      />      <LinkButton
        text="Mostrar tudo"
        route_link=""
        sizeClass="text-xs"
        colorClass="text-subdued"
        hoverColorClass="text-white"
        fontWeightClass="font-bold"
      />
    </section>
  </>;
}

export default App;
