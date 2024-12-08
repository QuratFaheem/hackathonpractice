const FlexboxContainer = () => {
    return (
      <div className="flex flex-wrap justify-between items-center gap-4 p-4 bg-gray-100">
        <div className="flex-1 max-w-[150px] text-center p-4 bg-white border border-gray-300 rounded shadow">
          <img src="cell.png"/>
        </div>
        <div className="flex-1 max-w-[150px] text-center p-4 bg-white border border-gray-300 rounded shadow">
        <img src="computer.png"/>
        </div>
        <div className="flex-1 max-w-[150px] text-center p-4 bg-white border border-gray-300 rounded shadow">
        <img src="smartW.png"/>
        </div>
        <div className="flex-1 max-w-[150px] text-center p-4 bg-red-600 border border-gray-300 rounded shadow">
        <img src="camera.png"/>
        </div>
        <div className="flex-1 max-w-[150px] text-center p-4 bg-white border border-gray-300 rounded shadow">
        <img src="Ephone.png"/>
        </div>
        <div className="flex-1 max-w-[150px] text-center p-4 bg-white border border-gray-300 rounded shadow">
        <img src="gaming.png"/>
        </div>
   </div>
    );
  };
  
  export default FlexboxContainer;
  