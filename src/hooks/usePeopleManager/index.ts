import { useCallback, useMemo, useState } from "react";

const usePeopleManager = () => {
  const [people, setPeople] = useState<Set<string>>(new Set());
  const addPerson = useCallback<(name: string) => void>(
    (name) => {
      const temp = new Set(people);
      temp.add(name);
      setPeople(temp);
    },
    [people]
  );
  const removePerson = useCallback<(name: string) => void>(
    (name) => {
      const temp = new Set(people);
      temp.delete(name);
      setPeople(temp);
    },
    [people]
  );
  const peopleList = useMemo(() => [...people], [people]);
  return useMemo(() => ({ addPerson, removePerson, people: peopleList }), [
    addPerson,
    peopleList,
    removePerson,
  ]);
};

export default usePeopleManager;
