import FooterText from "./FooterText";
import ListClearButton from "./ListClearButton";

function TodoFooter({todos, onClearAll}) {
  return (
    <div className="flex items-center gap-2 justify-between">
      <FooterText todos={todos}/>
      <ListClearButton onClearAll={onClearAll} />
    </div>
  );
}

export default TodoFooter
