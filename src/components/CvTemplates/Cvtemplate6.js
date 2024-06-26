import React from "react";

const Cvtemplate6 = ({ data }) => {
  return (
    <div className="my-10 px-5  ">
      <div className="mb-5 mt-20 text-center">
        <h3 className="text-3xl text-rose-900 uppercase font-bold">
          {data?.name}
        </h3>
        <p className="">{data?.address}</p>
        <p className=" ">{data?.mobileNumber}</p>
        <p className=" ">{data?.email}</p>{" "}
      </div>
      <div className="top-20 right-10 absolute -mt-1 mr-5">
        <img width="140" height="190" src={data?.imageUrl} alt="" />
      </div>
      <br />
      <br />
      <div className="">
        <p className="text-base text-center py-2">{data?.carrierObjective}</p>
      </div>
      {/*   Present Address */}
      <div className="py-2">
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Present Address
        </h2>
        {data?.presentAdd?.map((add, index) => (
          <div key={index}>
            <p>Village : {add.village}</p>
            <p>Post : {add.post}</p>
            <p>Post Office : {add.ps}</p>
            <p>District : {add.district}</p>
          </div>
        ))}
      </div>

      {/*     Career Objective */}
      {/* <div className="py-2">
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Career Objective
        </h2>
        <p className="text-base py-2">{data?.carrierObjective}</p>
      </div> */}
      {/*       Education Qualification */}
      <div>
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Education Qualification
        </h2>

        <div>
          {data?.education && (
            <div className="py-2">
              {data?.education.map((edu) => (
                <div className="py-2">
                  <h2 className="text-lg font-bold  pt-1 pb-2 px-1">
                    <span className="w-fit ">
                      {edu.level.toLowerCase() === "hsc"
                        ? `Higher Secondary Certificate(H.S.C):`
                        : edu.level.toLowerCase() === "ssc"
                        ? `Secondary School Certificate(S.S.C):`
                        : ` ${edu.level}:`}
                    </span>
                  </h2>
                  <div className="flex justify-between">
                    <p className="w-[30%] ">Group</p>
                    <p className="w-[70%] text-left ">: {edu.group}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="w-[30%] ">Passing Year</p>
                    <p className="w-[70%] text-left ">: {edu.passingYear}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="w-[30%] ">Achievement</p>
                    <p className="w-[70%] text-left ">
                      : {edu.grade}{" "}
                      {edu?.level?.slice(0, 1) === "H" ||
                      edu?.level?.slice(0, 1) === "S" ||
                      edu?.level?.slice(0, 1) === "J" ? (
                        <> (Out of 5.0)</>
                      ) : (
                        <> (Out of 4.0)</>
                      )}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="w-[30%] ">Institution</p>
                    <p className="w-[70%] text-left ">: {edu.board}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/*    Experience */}
      <div>
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Experience
        </h2>
        <div className="">
          {data?.experience?.map((exp, index) => (
            <div className="py-2" key={index}>
              <h6>
                <b>{exp.level}</b>
              </h6>
              <div className="flex justify-start gap-2">
                <p className="w-[30%]">Company </p>
                <p className="w-[70%]">: {exp.company}</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="w-[30%]">Experience </p>
                <p className="w-[70%]">
                  : {exp.years} {exp?.years === "1" ? <>Year</> : <>Years</>}
                </p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="w-[30%]">Year </p>
                <p className="w-[70%]">: {exp.range}</p>
              </div>
              <div className="flex justify-start gap-2">
                <p className="w-[30%]">Address </p>
                <p className="w-[70%]">: {exp.place} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Skills
        </h2>

        <div className="text-sm flex justify-start gap-3 flex-row flex-wrap">
          {data?.skills?.map((exp, index) => (
            <div
              className="p-2 mt-2 rounded border border-dotted bg-rose-900  text-white border-rose-900"
              key={index}
            >
              <h6>
                <b>{exp.technology}</b>
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Personal Skills
        </h2>

        <div className="text-sm flex justify-start gap-3 flex-row flex-wrap">
          {data?.personalSkills?.map((exp, index) => (
            <div
              className="p-2 mt-2 rounded border border-dotted bg-rose-900  text-white border-rose-900"
              key={index}
            >
              <h6>
                <b>{exp.personalSkill}</b>
              </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Languages
        </h2>

        <div className="text-sm flex flex-col items-start justify-start gap-3  flex-wrap">
          {data?.languageSkills?.map((lan, index) => (
            <div
              className="p-2 mt-2 rounded border border-dotted bg-rose-900  text-white border-rose-900"
              key={index}
            >
              <h6>{lan.language}</h6>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Projects
        </h2>

        <div className="text-sm ">
          {data?.projects?.map((project, index) => (
            <div className="py-2" key={index}>
              <div className="flex justify-between items-center ">
                <h3 className="text-lg font-semibold text-rose-700">
                  {project.title}
                </h3>
                <p>{project.range}</p>
              </div>

              <div className="">
                <p className="italic">Decription : </p>
                <h3 className="inline-block text-justify">
                  {project.description.split("•")}
                </h3>
              </div>

              <a
                rel="noreferrer"
                href={project.link}
                className="underline text-blue-600 font-semibold"
              >
                Live Link
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold text-rose-900  border-b-2 border-rose-900 my-2">
          Personal Information
        </h2>
        <div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Name </p>
            <p className="w-[80%]">: {data?.name}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Father's Name</p>
            <p className="w-[80%]">: {data?.fathersName}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Mother's Name:</p>
            <p className="w-[80%]">: {data?.mothersName}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Date of Birth </p>
            <p className="w-[80%]">: {data?.dateOfBirth}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Permanent Address </p>
            <div className="w-[80%] ">
              {data?.permanentAdd.map((permanent) => (
                <>
                  <div>
                    <div className="flex gap-2">
                      <p>: Village : {permanent.village},</p>
                      <p>Post Office : {permanent.post}</p>
                    </div>
                    <div className="flex gap-2">
                      <p> Police Station : {permanent.ps},</p>
                      <p>District : {permanent.district}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
          {/* <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Present Address </p>
            <div className="w-[80%] ">
              {data?.presentAdd.map((present) => (
                <>
                  <div>
                    <div className="flex gap-2">
                      <p>: Village : {present.village},</p>
                      <p>Post Office : {present.post}</p>
                    </div>
                    <div className="flex gap-2">
                      <p> Police Station : {present.ps},</p>
                      <p>District : {present.district}</p>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div> */}
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Marital Status</p>
            <p className="w-[80%]">: {data?.maritalStatus}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Gender </p>
            <p className="w-[80%]">: {data?.sex}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Religion </p>
            <p className="w-[80%]">: {data?.religion}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Nationality </p>
            <p className="w-[80%]">: {data?.nationality}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> Blood Group </p>
            <p className="w-[80%]">: {data?.blood}</p>
          </div>
          <div className="flex justify-start gap-2">
            <p className="w-[20%]"> NID </p>
            <p className="w-[80%]">: {data?.nid}</p>
          </div>
        </div>
      </div>

      <div className="py-4">
        <p className="font-bold">Singature</p>
        <br />
        <p className="text-rose-900 font-bold">{data?.name}</p>
      </div>
    </div>
  );
};

export default Cvtemplate6;
