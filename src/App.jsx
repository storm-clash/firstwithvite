import Card, { CardWithImg } from "./Card/card.jsx";
import Header from "./Header/header.jsx";
import Student from "./props/Student.jsx";
import UserGreeting from "./ConditionalRendering/UserGreeting.jsx";
import List from "./ListHandler/list.jsx";
import ClicEvent from "./clickEvent/button.jsx";
import ComponentHook from "./ReactHook/Hook.jsx";
import OnChange from "./OnChange/onChange.jsx";
import PickerEjercice from "./ColorPicker/Picker.jsx";
import UpdateComponent from "./UpdateFunction/Update.jsx";
import UpdateObject from "./UpdateFunction/UpdateObject.jsx";
import ToDoList from "./ToDoList/ToDo.jsx";

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      <Header />
      <div className="body_Wrapper">
        <div className="card__Holder">
          <Card />
          <CardWithImg />
        </div>
        <div className="props_Wraper">
          <Student name="Spongebob" age={30} isStudent={true} />
          <Student />
        </div>
        <div className="Conditional_Rendering">
          <UserGreeting isLoggedIn={true} username="Storm" />
          <UserGreeting isLoggedIn={true} />
        </div>
        <div className="list_Handler">
          {fruits.length > 0 && <List items={fruits} category={"Fruits"} />}
          {vegetables.length > 0 && (
            <List items={vegetables} category={"Vegetables"} />
          )}
        </div>

        <div className="click_Event">
          <ClicEvent />
        </div>
        <div className="hook">
          <ComponentHook />
        </div>

        <div className="OnChange">
          <OnChange />
        </div>

        <div className="pickerEjercice">
          <PickerEjercice />
        </div>
        <div className="update_Component">
          <UpdateComponent />
        </div>

        <div className="update_Object">
          <UpdateObject />
        </div>
        <div className="to_do">
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
