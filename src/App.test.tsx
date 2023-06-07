import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import userEvent from '@testing-library/user-event';
import { render, screen } from "./setup-tests";
import App, { GET_MOVIES_QUERY, GET_TOM_CRUISE_MOVIES } from "./App";

const mocks = [
  {
    request: {
      query: GET_MOVIES_QUERY,
      variables: {
        query: "Harry",
      },
    },
    result: {
      data: {
        searchMovies: {
          page: 1,
          results: [
            {
              id: "671",
              name: null,
              overview:
                "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard—with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths—and about the villain who's to blame.",
              poster_path:
                "https://image.tmdb.org/t/p/w500/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
              release_date: "2001-11-16",
              title: "Harry Potter and the Philosopher's Stone",
              __typename: "Movie"
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_TOM_CRUISE_MOVIES,
      variables: {
        id: 500,
      },
    },
    result: {
      data: {
        person: {
          cast: [
            {
              id: "616",
              name: null,
              overview:
                "Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurai's way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist.",
              poster_path: "/lsasOSgYI85EHygtT5SvcxtZVYT.jpg",
              release_date: "2003-12-05",
              title: "The Last Samurai",
              __typename: "Movie"
            },
          ],
        },
      },
    },
  },
]; // We'll fill this in next

test("Render inputs successfully", () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  expect(screen.getByTestId("search-input")).toBeInTheDocument();
  expect(screen.getByTestId("cruise")).toBeInTheDocument();
});

test("Render queried movies successfully", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  const input = await screen.getByTestId("search-input");
  userEvent.type(input, "Harry Potter");

  expect(await screen.findByText("Philosopher")).toBeInTheDocument();

  // expect(screen.getByTestId("search-input")).toBeInTheDocument();
  // expect(screen.getByTestId("cruise")).toBeInTheDocument();
});