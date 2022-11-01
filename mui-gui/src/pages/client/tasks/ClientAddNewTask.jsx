import React, { useEffect, useState } from "react";
import {
  Card,
  FormInput,
  Button,
  CheckAuthStatus,
  AutoComplete,
} from "../../../components/shared";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { TbFidgetSpinner } from "react-icons/tb";

const ClientAddNewTask = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <>
      <CheckAuthStatus />
      <Card>
        <Formik
          initialValues={{
            title: "",
            description: "",
            skills: selectedItems,
            skill: [],
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(100, "title cannot exceed 100 characters ")
              .min(5, "title must be more than 5 characters ")
              .required("title is required"),
            description: Yup.string()
              .max(1500, "description cannot exceed 1500 characters")
              .min(100, "description must be more than 100 characters ")
              .required("description is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {(formik) => (
            console.log(formik.values),
            (
              <Form className="px-2">
                <FormInput
                  label={"Title (e.g. Make me a custom website)"}
                  placeholder="Title"
                  field_name="title"
                  type="text"
                  touched={formik.touched.title}
                  errors={formik.errors.title}
                />
                <FormInput
                  label={
                    "Describe your task in detail and how you want it done"
                  }
                  placeholder="Description"
                  field_name="description"
                  as="textarea"
                  touched={formik.touched.description}
                  errors={formik.errors.description}
                  rows="4"
                />
                <Field
                  as="select"
                  name="skill"
                  multiple={true}
                  placeholder="something"
                >
                  {[
                    { id: 1, item: "HTML" },
                    { id: 2, item: "CSS" },
                    { id: 3, item: "PHP" },
                    { id: 4, item: "JavaScript" },
                    { id: 5, item: "React" },
                    { id: 6, item: "Laravel" },
                    { id: 7, item: "Vuejs" },
                    { id: 8, item: "Nextjs" },
                  ].map((item, index) => (
                    <option key={index} value={item.id} defaultChecked>
                      {" "}
                      {item.item}
                    </option>
                  ))}
                </Field>
                {/* <AutoComplete
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                field_name="skill"
                options={[
                  { id: 1, item: "HTML" },
                  { id: 2, item: "CSS" },
                  { id: 3, item: "PHP" },
                  { id: 4, item: "JavaScript" },
                  { id: 5, item: "React" },
                  { id: 6, item: "Laravel" },
                  { id: 7, item: "Vuejs" },
                  { id: 8, item: "Nextjs" },
                ]}
              /> */}
                <Button type="submit">
                  <TbFidgetSpinner className={`inline-block animate-spin `} />

                  <span>Login</span>
                </Button>
              </Form>
            )
          )}
        </Formik>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel vitae
          ipsa labore atque, ut dolorem? Ducimus, tempora laudantium, earum cum
          nihil vel a vero eius sed ea quam blanditiis maxime asperiores?
          Suscipit ducimus autem expedita deserunt possimus quos omnis, illum
          aperiam eligendi vero ipsa perferendis minus optio officia architecto
          beatae maxime odio, accusantium facilis. Tenetur at iure commodi
          consequatur, sit quod molestiae beatae ut. Eligendi, laborum magni!
          Aliquid quis quaerat minima pariatur reiciendis! Natus porro hic cum,
          nisi veritatis quam, corporis nemo enim temporibus dolore laudantium
          nam quos quasi architecto rerum eum blanditiis iste qui veniam! Amet
          cumque neque inventore laboriosam, voluptates optio suscipit dolores.
          Eaque nemo fuga dolorum ipsa dolorem amet ex laborum exercitationem,
          nam fugiat perferendis vel non autem illum laboriosam nisi fugit
          deserunt quam eveniet consectetur tenetur deleniti aut! Voluptatum
          itaque asperiores ad laudantium nulla, obcaecati architecto sit
          adipisci vero aut quasi harum autem eos ab unde quae vel perspiciatis
          pariatur deleniti optio iste. Fuga placeat assumenda vero tempore
          ullam exercitationem laudantium similique explicabo, quia sit
          accusamus excepturi amet. Perspiciatis eius nam sapiente vero sit
          culpa vel officia corrupti consectetur saepe nisi, fuga sed? Magni
          corporis nesciunt quas, neque iusto voluptatem porro? Exercitationem
          facere enim incidunt? Illum laboriosam deleniti ex, totam nisi animi
          error repudiandae veritatis laborum necessitatibus, itaque asperiores
          voluptas, voluptatum rem delectus porro sit temporibus beatae sapiente
          cum iusto magnam commodi. Voluptas culpa ea, doloremque quas
          laboriosam eveniet nihil officiis suscipit, a nostrum cupiditate nisi
          exercitationem explicabo facilis fuga quam praesentium accusantium,
          aut accusamus unde facere! Dolorem, distinctio saepe. Obcaecati
          voluptates ad expedita facilis laudantium cum eius odio beatae
          veritatis nulla? Corrupti quas molestiae omnis accusantium nobis odio
          quo eaque optio, deserunt reprehenderit velit distinctio unde ab
          ducimus ut eveniet magni dolore? Earum neque quis excepturi et,
          perspiciatis distinctio aperiam pariatur quaerat tenetur non aliquam
          fugit dolore dolorem laboriosam velit ipsa veniam. Placeat obcaecati
          dolorum odit reprehenderit, cupiditate est velit debitis amet autem
          praesentium! Ipsum, accusantium nobis. Itaque deserunt sint nulla!
          Delectus voluptas iusto totam esse quam temporibus. Blanditiis atque
          beatae repudiandae nulla, mollitia aliquam nobis voluptatem vel quos
          sequi nihil explicabo accusantium commodi, porro ipsam quidem incidunt
          fuga illum, temporibus sit sapiente! Dolores, eligendi. Non itaque
          illum tempore impedit optio eos perferendis iste assumenda porro odio
          odit alias ullam laboriosam magnam, officia aliquam officiis nemo,
          consectetur a dicta pariatur? Reiciendis ea quia asperiores iure in
          voluptates delectus deserunt fugiat laborum aliquam. Alias esse
          accusamus earum dolore corrupti a dolores illo eius qui. Aliquam
          tempore maiores ex suscipit facilis enim! Sed temporibus ex est
          doloremque iure, provident facilis delectus error officiis at harum
          beatae rerum ipsum dignissimos unde nam adipisci numquam vel non
          aspernatur. Dolorem reprehenderit corrupti nulla soluta natus ipsam
          aliquid magni magnam doloribus dolor aliquam voluptatum neque
          provident voluptatibus at facere, nihil et aperiam. Quo aut fugit
          eaque possimus debitis, numquam dolores sunt, doloribus repellat sed
          distinctio ut, dolorum minus at corrupti asperiores minima autem!
          Corporis aut recusandae asperiores alias neque atque temporibus, eos
          velit, vel beatae veniam optio minus sed nihil consequatur itaque
          quisquam vero cum minima repellat. Voluptatem at repellendus eligendi
          esse molestiae quaerat consequatur aliquam explicabo blanditiis quos?
          Praesentium deserunt distinctio pariatur unde voluptatibus dolor
          soluta quos blanditiis excepturi labore explicabo odio culpa ad sit
          delectus hic eius voluptatum, officia accusantium id debitis incidunt?
          Eveniet a saepe repudiandae deleniti dolorem, fuga laboriosam atque
          odio molestias quam hic corrupti itaque totam est nisi numquam,
          aliquam, vel culpa. Esse dolor inventore, similique alias magni animi
          natus explicabo officiis pariatur modi nulla aliquid consectetur eos
          soluta accusamus nobis hic cum delectus tempore deserunt, sit velit.
          Expedita corrupti esse laboriosam ea autem blanditiis obcaecati,
          distinctio sequi iure a. Omnis exercitationem a minus mollitia
          similique, repellendus incidunt. Ex iste beatae fugiat earum impedit
          quia consequuntur ab architecto neque sint quas rerum, maiores
          voluptates dolorum distinctio hic accusantium? Amet voluptates officia
          quod facere modi, illum provident rem qui vel eius aut numquam cum
          tenetur laborum mollitia repellendus ea consequuntur unde? Aspernatur
          iusto molestias, maxime sapiente quod, distinctio consequuntur quia ab
          necessitatibus cum magni itaque adipisci modi! Amet tempora possimus
          perferendis mollitia sit quibusdam dolorum deserunt, architecto
          aperiam deleniti soluta laboriosam iure non doloremque illum,
          cupiditate esse iusto pariatur modi consequuntur rerum velit earum
          veritatis. Officia aliquid ipsam saepe recusandae magnam. Ducimus
          minus et mollitia inventore cum in explicabo. Impedit officiis
          praesentium dolor quisquam sapiente ad voluptatum, rerum itaque unde
          nobis eum at corporis similique harum, sit a cupiditate laudantium
          magni, voluptate rem vel doloremque odit. Blanditiis ea exercitationem
          molestias voluptatem quam saepe aspernatur aut expedita in, nemo
          voluptatibus perferendis rerum corrupti est nesciunt. Aspernatur,
          neque dolore? Pariatur laudantium illum enim blanditiis veritatis
          reiciendis totam sequi architecto deserunt soluta! Ipsum, fuga eum?
          Nam dolore cupiditate aliquid, quaerat quas dicta doloremque neque,
          minima accusamus deserunt delectus temporibus mollitia vero reiciendis
          sit architecto amet voluptatibus quidem quis saepe. Asperiores aliquam
          cumque reprehenderit mollitia explicabo neque necessitatibus eos
          dolores labore ea voluptate minus voluptatum, dolorum vero excepturi
          suscipit fugit maxime ipsum non in amet quam error. Nobis id nisi et
          voluptas incidunt aut repudiandae minima, saepe aperiam. Veritatis
          corporis animi consectetur modi voluptatibus sunt aliquam, quaerat
          sapiente, reprehenderit accusantium similique. Fugiat voluptatem odio
          sed natus autem ipsum, quia dolor nihil minus saepe corporis eligendi
          voluptates vitae ipsa, eveniet itaque libero, omnis obcaecati quo et
          officiis laborum recusandae non! Tempore accusamus nihil quaerat
          accusantium repudiandae consequatur voluptatibus quas laudantium
          repellendus id, assumenda maxime, illum labore neque ducimus culpa.
          Quisquam earum est aut iure fugit! Tempora libero consequatur culpa
          iste, pariatur velit dolorem totam ipsam, minus hic doloribus error
          nulla deleniti reiciendis esse vitae nesciunt facilis sequi et?
          Officiis sunt, amet repellat reprehenderit laborum, aut illo
          asperiores cupiditate eius dicta natus nisi saepe, autem
          exercitationem! Id nesciunt eaque delectus laboriosam eum,
          necessitatibus fugit ipsum at quos eos expedita eveniet modi ipsa
          officiis voluptate officia et animi, rem consequuntur neque. Commodi
          cum sit fuga dolorum officia voluptates, unde amet voluptas accusamus
          impedit blanditiis autem culpa perspiciatis eius porro dolorem fugiat
          expedita aut at in nulla repudiandae dolores asperiores vitae! Soluta
          odit maiores aperiam!
        </div>
      </Card>
    </>
  );
};

export default ClientAddNewTask;
