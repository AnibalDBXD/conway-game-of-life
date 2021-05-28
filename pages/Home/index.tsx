import Table from "./Table";

const Home = (): JSX.Element => {
  const numberofColumns = 10;
  const numberofRows = 10;
  const time = 2000;
  
  return (
    <Table numberofColumns={numberofColumns} numberofRows={numberofRows} time={time} />
  );
};

export default Home;
