import { usePizzas } from "../context/PizzasContext.jsx";

export function Pizza() {
  const { pizza } = usePizzas();

  const mapIngredients = pizza?.ingredients?.map((ingredient, index) => {
    const isLast = index === pizza.ingredients.length - 1;
    return (
      <li key={ingredient} className="ingredient-item">
        {ingredient}
        {!isLast && ", "}
      </li>
    );
  });

  return (
    <>
      <div className="m-3 section-card section-card-pizza">
        <div className="col-md-4 card-pizza">
          <div className="card">
            <img
              src={pizza.img}
              className="card-img-top"
              alt="imagen de card principal"
            />
            <div className="card-body">
              <h5 className="card-title">{pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  🍕 Ingredientes: {mapIngredients}
                </small>
              </p>
              <button type="button" className="btn btn-dark">
                Añadir ${pizza?.price?.toLocaleString("es-CL")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
