

const CreateFixtureList = () => {
  return (
    <>
    

    <div className="bg-black py-[50px]">
      <form className="flex flex-col gap-4 p-4 lg:w-[40%] mx-auto rounded-md">
        <h1 className="text-white text-2xl text-center">Create a Fixture list</h1>
        <p className="text-sm font-light text-white text-center">
          Enter your league details and set up your team names below to create a
          fixture list.
        </p>

        <input
          type="text"
          id="ListName"
          name="ListName"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
          placeholder="Tournament name"
        />

        <label forHTML="types" className="text-md text-white font-thin"
          >Participant Type :</label
        >
        <select
          name="ptypes"
          id="ParticipantType"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
        >
          <option value="Player">Player</option>
          <option value="Team">Team</option>
        </select>

        <label forHTML="types" className="text-md text-white font-thin"
          >Meetings :</label
        >
        <select
          name="ptypes"
          id="types"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
        >
          <option value="Player">Once Only</option>
          <option value="Team">Home and away</option>
        </select>

        <label forHTML='types' className="text-md text-white font-thin"
          >Type of fixture :</label
        >
        <select
          name="ptypes"
          id="types"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
        >
          <option value="Player">Round</option>
          <option value="Team">day</option>
          <option value="Team">week</option>
        </select>

        <label forHTML="types" className="text-md text-white font-thin"
          >Number of Players :</label
        >
        <select
          name="ptypes"
          id="types"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 text-white"
        >
          <option value="Player">6</option>
        </select>

        <h1 className="text-white text-2xl text-center">Participants</h1>

        <input
          type="text"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
          placeholder="Team 1 Name"
        />

        <input
          type="text"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
          placeholder="Team 2 Name"
        />

        <input
          type="text"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
          placeholder="Team 3 Name"
        />

        <input
          type="text"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
          placeholder="Team 4 Name"
        />

        <input
          type="text"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
          placeholder="Team 5 Name"
        />

        <input
          type="text"
          className="border-2 border-slate-600 p-2 focus:outline-none rounded-md bg-slate-800 placeholder:font-thin text-white"
          placeholder="Team 6 Name"
        />

        <button className="text-white py-3 rounded-md bg-blue-500 w-[30%] mx-auto">
          Create List
        </button>
      </form>
    </div>

    </>
  )
}

export default CreateFixtureList
