import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_boxe9UPN5GDU4jd8JMVAzyNkCatGHTHHczgqkNkHw&s",
      name: "Google",
      datePosted: "2 days ago",
      post: "Junior Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$42/hour",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      name: "Microsoft",
      datePosted: "5 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hour",
      location: "Remote, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcsJcIJcNnsiHryqYsdrhFw_O0KWrATt0bUE2zvKa9_g&s=10",
      name: "Amazon",
      datePosted: "1 week ago",
      post: "Senior UI/UX Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$68/hour",
      location: "Karachi, Pakistan",
    },
    {
      brandLogo:
        "data:image/png;base64,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",
      name: "Meta",
      datePosted: "3 days ago",
      post: "React.js Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hour",
      location: "Remote, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ISHLYYTtNVfZBbVOk1F5jKpDvy-4UKpd4hl9xRi3Aw&s=10",
      name: "Apple",
      datePosted: "10 days ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hour",
      location: "Remote, Pakistan",
    },
    {
      brandLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJsAAACUCAMAAACz6atrAAAAk1BMVEUAAACxBg/lCRS5Bg9gBAheBAj///9bBAfoCRTrCRS0Bg+tBg91BApIAwaVBQw8AgVAAwWdBQ1EAwaOBQylBQ6SkpLUCBPcCRODBQvOCBLyCRVPAwdnBAmjo6O+vr739/cgICDr6+tERETLy8tWVlYXFxcmAQMzAgTEBxGDg4Pi4uIoKChgYGBra2t8BQtVAwcbAANVExHiAAAEqklEQVR4nO3c/W/aPBAHcCemkMRgMHZJeFm77gXSbiP9//+62TBKmnyzPtIjcqcpJ/WnRugjH2efTRIx9nEvuMV9YAn/94laAuLT2fZA7YDxEGyPn6kZMD4/ehu/L9s57sfi6Qs1oiO+PImv1IbO+Cq4ptQnVXyjJnTGN/GdmtAZfGVDDDHEEEMM8X9jV0qZ1UNKWe4aF+2n7TjOb27bbtJ2RI2L5rId5d3Nbct1EjcjWTXGZB61Q05ubtuqti1Ojw1bRmPTeduWlCxslS3BwG32LGzapCCploXNFG2aT+orA9vEFCipccXB5qwBtFRzsCltV2CKyxnYRsoUElXqjIEtMtaiSlUMbJnTxxwkdV2b4qhs0ukiAgOXTBnYlLEaVaq7XrSgskVGwykuvSaVzuZMgZqRzTWpdDafVLRupddmhNDmqwF0mHH+NsXR2SKnLWxGCgY2ZbSFHealGSG0+YHDlXrZNpDazN+bEUpbqFSU1BUDW5jiJKiGeMfAFtYttKYaFjZdoA5zdaC3hUrNUKWOGNi6mpGMg83ZYgVwMQPbqRlB1VB02m5/jnSxdTQjiWRhw+vWqRkhtoVKdahSCwY2n1TYjKxZ2HBSN376XRLbQqXqDUiqZWDzSZ2iSl2/MrD5aoDNyITeFrYNcN0y5LXQ3YzkYtGm9WwLG3x43FUdFLnNbxssmn7V3pHbfKUeYYdZmfbA9WwL6xZqRmKr6W1KWwtoSWnbSe3d1rFuxbqd1L5tIakRrIZ2Uvu34Q4zXrWTKkc92/y24YiOu2LTSmrvtpBUdNyVyFZS+7d1dZgr3UwqhQ2vW4lrJrV/22nbAL5vqWwOHIUNH3fFuTXktrCm/qekEthCh4l+e0vKRlIpbGGDDztM7RS9zU9xaN1qJJXCFip1BzfR79ctGpuxh45mhNzmB+5wBJvoJHq3bhHZzEIg2/pdpdLYlLehw9/Y1CuVyOaW4oh+e4vqldp7b/kHtxRzOMXVK5XKNhMC3V6Q1iuVyBZ52x067qp3mES2LJzxxqAa6h0mlW3r/+HQJlpdq4HSdocapVKzsO3BuhWaEQ42AW8vuDYjPdjuOm2zvyeVyna+MQTeM2IMse00bqIAU9y1UmnHbQ5vi7tUA63tFe23Yh42UaBtw6XDJLbtwbC9JZXYJjK0bjnDwjZCrbk8Vyq1bQ9P9I3jYIPr1p9tA7ltB2jpOankNrxunSqV3gaTempG6G1zfNzFwoaSmuShUhnYCjRwYRPNwFbBG1h9NVDZlrUL4OEvE9sUHneZPmyTj2wCjdtaqz6e5fnQhpoRX6ksbFM0cJnJONgO8ClQHXGwCfTgRWIUC9sW/qDqiGyL99fA4y5T4Q/s2YZu546jbY+2t8fEpWw87lylm/MT24mPS1LLPmzek0VKOWNsURS7yXa2bF602E0La5SS5XqV5/HZeXtb5ex0Oqq28/3rxxf73c1hNvFQE5VJ8yH8IYYYYoghhvh3gu9b1r4Lrq9CFF72TE3ojGfB862gIR7Eyw9qQ0f8eBFjrkl9HovxCzWiI17Ce2h5vn3z/vSO3Mef1A4QPx/P7xZmiAu0k2389Iva0ohfT4H1GxG1ZCP4B8uwAAAAAElFTkSuQmCC",
      name: "Netflix",
      datePosted: "2 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$75/hour",
      location: "Remote, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjjJzht9IZNpRjvIRDcB4Efht5zif2GakdJRyfJpT5lw&s=10",
      name: "NVIDIA",
      datePosted: "4 days ago",
      post: "Web Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$38/hour",
      location: "Lahore, Pakistan",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3Uheto3ceVsRJoVDpQDGCWeMV2cZfB1LwWNEmhzC-A&s=10",
      name: "IBM",
      datePosted: "6 weeks ago",
      post: "Software Engineer - Frontend",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hour",
      location: "Karachi, Pakistan",
    },
  ];
  console.log(jobs);

  return (
    <div className="parent">
      {jobs.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              brandLogo={elem.brandLogo}
              name={elem.name}
              post={elem.post}
              pay={elem.pay}
              location={elem.location}
              tag1={elem.tag1}
              tag2={elem.tag2}
              datePosted={elem.datePosted}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
