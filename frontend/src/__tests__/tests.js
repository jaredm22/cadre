import {
  render,
  screen,
  waitFor,
  fireEvent,
  waitForElement,
  getAllByLabelText,
} from "@testing-library/react";
// import { rest } from 'msw'
// import { setupServer } from 'msw/node'

import App from "../App";
import CourseCard from "../components/CourseCard";
import Day from "../components/Day";
import Calendar from "../features/calendar/Calendar";

// const server = setupServer(
//   // capture "GET /greeting" requests
//   rest.get('/greeting', (req, res, ctx) => {
//     // respond using a mocked JSON body
//     return res(ctx.json({ greeting: 'hello there' }))
//   })
// )

// beforeAll(() => server.listen())
// afterAll(() => server.close())

test("renders app", () => {
  render(<App />);
  const linkElement = screen.getByText(/Cadre/);
  expect(linkElement).toBeInTheDocument();
});

// test("calendar component renders", () => {
//   const wrapper = render(<Calendar />);
//   expect(wrapper).toBeDefined();
// });

test("expanded view works", async () => {
  // let [month, date] = new Date().toLocaleDateString("en-US").split("/");
  render(<Day />);
  // await screen.findByText(date);
  fireEvent.click(screen.getByLabelText("day"));

  await waitFor(() =>
    expect(screen.getByLabelText("expanded-view-info")).toHaveTextContent(
      "office hours"
    )
  );
});

test("day components equal number of days on slider", () => {
  render(<Calendar />)
  const slider = screen.getByRole("presentation")
  let vale = slider.nodeValue
});

//   <label for="__carbon-slider_cedp560jnxu\"
//   class=\"bx--label\" id=\"__carbon-slider_cedp560jnxu-label\"></label><div class=\"bx--slider-container\"><span class=\"bx--slider__range-label\">1</span><div class=\"bx--slider day-slider \" role=\"presentation\" tabindex=\"-1\" value=\"3\">

//check if expanded
//check if number of day components == val of sliderr
