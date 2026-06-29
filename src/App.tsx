import { LinkButton } from "./components/ui/buttons/LinkButton";

function App() {
  return <>
    <LinkButton
      text="Clique aqui"
      route_link="/home"
      sizeClass="text-base"
      colorClass="green"
      hoverColorClass="hover:text-green-hover"
    />
  </>;
}

export default App;
