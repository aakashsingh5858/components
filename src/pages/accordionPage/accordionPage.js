import React, { useState } from "react";
import Accordion from "../../components/accordion/Accordion";

const AccordionPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Accordion isOpen={isOpen} setIsOpen={setIsOpen}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        repudiandae molestias error. Earum debitis excepturi doloribus expedita,
        quos magni assumenda a itaque, nostrum laudantium corporis consequatur
        quas aperiam, fuga accusantium saepe soluta neque? Qui voluptas
        similique reiciendis. Quia voluptas quo doloremque maxime tenetur
        repellendus optio libero quibusdam laboriosam rerum quae earum nemo,
        minus ab id corrupti. Nam recusandae ex necessitatibus exercitationem!
        Dicta ea deserunt voluptate veritatis beatae ab saepe nihil, illum nulla
        perspiciatis commodi quod quasi cupiditate maiores reprehenderit, rerum
        officiis expedita harum nemo corporis, eum neque perferendis. Repellat
        neque voluptate explicabo nemo harum molestias nobis libero nihil amet
        tempora!
      </Accordion>
    </div>
  );
};

export default AccordionPage;
