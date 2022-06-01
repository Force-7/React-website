function Page({ component, title }) {
  return (
    <div className={`flex flex-col h-screen justify-center`}>
      <h1 className="font-bold text-3xl text-center pb-20">{title}</h1>
      {component}
    </div>
  );
}

export default Page;
