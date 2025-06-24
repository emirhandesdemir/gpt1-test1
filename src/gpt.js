export async function runGPTCommand(command) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content:
            "Kullanıcının frontend komutlarına karşılık HTML/JS/Firebase kodları üret. DOM'a müdahale edecek şekilde üret.",
        },
        {
          role: "user",
          content: command,
        },
      ],
    }),
  });

  const data = await res.json();
  return data.choices[0].message.content;
}
