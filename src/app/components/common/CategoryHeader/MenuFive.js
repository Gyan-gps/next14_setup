import Link from "next/link";
function MenuFive({ categories }) {
  return (
    <header className="menufiveHeader">
      <div className="menufiveContainer">
        {/* <div className="logo"></div> */}
        <nav>
          <ul>
            {categories.slice(0, 11).map((item, index) => {
              if (item) {
                return (
                  <li key={index + 1}>
                    <Link href={`${process.env.NEXT_PUBLIC_URL}/${item.main_category_name.trim().replaceAll(" ", "-")}`} style={{
                      textTransform: "capitalize",
                      textDecoration: "none",
                      color: "#fff"
                    }}>{item.main_category_name.toUpperCase()}</Link>
                    {item.subcategory.length === 0 ? (
                      <></>
                    ) : (
                      <div className="megamenu">
                        {categories.map((i) => {
                          if (
                            i.main_category_name === item.main_category_name
                          ) {
                            return (
                              <div className="megamenuItems" key={i.category_name.toUpperCase() + (index + 1)} >
                                <Link href={"#"} style={{
                                  textTransform: "capitalize",
                                  color: "#000",
                                  fontSize: "14px",
                                  padding: "10px 6px",
                                  cursor: "auto",
                                  textDecoration: "none"
                                }} >{i.category_name.toUpperCase()}</Link>

                                <ul>
                                  {i.subcategory.map((j) => {
                                    return (
                                      <Link
                                        key={`${i.category_name?.toUpperCase() != item.main_category_name.toUpperCase() ? i.category_name.trim().replaceAll(" ", "-") + "/" : ""}${j.name.trim().replaceAll(" ", "-")}`}
                                        href={`${process.env.NEXT_PUBLIC_URL}/${item.main_category_name.trim().replaceAll(" ", "-")}/${i.category_name?.toUpperCase() != item.main_category_name.toUpperCase() ? i.category_name.trim().replaceAll(" ", "-") + "/" : ""}${j.name.trim().replaceAll(" ", "-")}`}
                                      >
                                        <li style={{
                                          textTransform: "capitalize"
                                        }} >{j.name}</li>
                                      </Link>
                                    );
                                  })}
                                </ul>
                              </div>
                            );
                          }
                        })}
                      </div>
                    )}
                  </li>
                );
              } else {
                return <></>;
              }
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MenuFive;
