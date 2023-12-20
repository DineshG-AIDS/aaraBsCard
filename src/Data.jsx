import Image1 from "./assets/10.png";
import Image2 from "./assets/11.png";
import Image3 from "./assets/6.png";
import Image4 from "./assets/7.png";
import Image5 from "./assets/8.png";
import CardFirstImageTop from "./assets/10top-removebg-preview.png";
import CardFirstImageBottom from "./assets/10down-removebg-preview.png";
import CardSecondImageTop from "./assets/11top-removebg-preview.png";
import CardSecondImageBottom from "./assets/11down-removebg-preview.png";
import CardThirdImageTop from "./assets/6down-removebg-preview.png";
import CardThirdImageBottom from "./assets/6up-removebg-preview.png";
import InstaLogoFor1 from "./assets/instaLogo1.png";
import TwitterLogoFor1 from "./assets/twitter1.png";
import FaceBookLogoFor1 from "./assets/facebook1.png";
import YoutubeLogoFor1 from "./assets/icons8-youtube-50.png";
import LinkedInLogoFor1 from "./assets/linkedin1.png";

// import Image6 from "./asserts/sample6.jpg";
const data = {
  1: {
    name: "Custom Name 1",
    image: Image1,
    bg: "#1d2122",
    top: CardFirstImageTop,
    bottom: CardFirstImageBottom,
    logos: [
      InstaLogoFor1,
      TwitterLogoFor1,
      FaceBookLogoFor1,
      YoutubeLogoFor1,
      LinkedInLogoFor1,
    ],
    contactLogo: [
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTE0LDMuOTkwMjNjLTUuNTExMzMsMCAtMTAsNC40ODg2NyAtMTAsMTB2MjJjMCw1LjUxMTMzIDQuNDg4NjcsMTAgMTAsMTBoMjJjNS41MTEzMywwIDEwLC00LjQ4ODY3IDEwLC0xMHYtMjJjMCwtNS41MTEzMyAtNC40ODg2NywtMTAgLTEwLC0xMHpNMTQsNS45OTAyM2gyMmM0LjQzMDY3LDAgOCwzLjU2OTMzIDgsOHYyMmMwLDQuNDMwNjcgLTMuNTY5MzMsOCAtOCw4aC0yMmMtNC40MzA2NywwIC04LC0zLjU2OTMzIC04LC04di0yMmMwLC00LjQzMDY3IDMuNTY5MzMsLTggOCwtOHpNMTguMDQ4ODMsMTEuMDM1MTZjLTIuMDQ1MzIsLTAuMDg4MzggLTMuNTk3NywwLjY4ODc3IC00LjU3NDIyLDEuNjIzMDVjLTAuNDg4MjYsMC40NjcxNCAtMC44NDA3OCwwLjk2Njk4IC0xLjA4MjAzLDEuNDMzNTljLTAuMjQxMjUsMC40NjY2MiAtMC4zOTQ1MywwLjg1MTMxIC0wLjM5NDUzLDEuMzUxNTZjMCwtMC4wNDQ1NiAtMC4wMTA5OSwwLjE4OTMzIC0wLjAxNzU4LDAuNDYwOTRjLTAuMDA2NiwwLjI3MTYxIC0wLjAwNTQsMC42Mzc3NSAwLjAxOTUzLDEuMDgwMDhjMC4wNDk5NiwwLjg4NDY2IDAuMTk5OSwyLjA4MTMgMC41OTc2NiwzLjVjMC43OTU1MiwyLjgzNzQgMi41ODY3OSw2LjU1OTQ1IDYuNDcyNjYsMTAuNDQ1MzFjMy44ODU4NywzLjg4NTg3IDcuNjA3Nyw1LjY3Njg5IDEwLjQ0NTMxLDYuNDcyNjZjMS40MTg4LDAuMzk3ODggMi42MTUyNiwwLjU0NzU5IDMuNSwwLjU5NzY2YzAuNDQyMzcsMC4wMjUwMyAwLjgwNjQ4LDAuMDI2MDkgMS4wNzgxMywwLjAxOTUzYzAuMjcxNjQsLTAuMDA2NiAwLjUwNzMsLTAuMDE3NTggMC40NjI4OSwtMC4wMTc1OGMwLjUwMDI1LDAgMC44ODQ5NCwtMC4xNTMyOCAxLjM1MTU2LC0wLjM5NDUzYzAuNDY2NjIsLTAuMjQxMjUgMC45NjY0NSwtMC41OTM3NyAxLjQzMzU5LC0xLjA4MjAzYzAuOTM0MjgsLTAuOTc2NTIgMS43MTE0MiwtMi41Mjg4OSAxLjYyMzA1LC00LjU3NDIyYy0wLjA0MTk0LC0wLjk3NTQ4IC0wLjU4MzUzLC0xLjgzOTMxIC0xLjM4MjgxLC0yLjM1MTU2Yy0wLjYxNzY4LC0wLjM5NTc5IC0xLjU3NjU3LC0xLjAxMDE5IC0yLjgyODEyLC0xLjgxMDU1Yy0xLjQ1MjA5LC0wLjkyNzc2IC0zLjMwOTQsLTAuOTk0MDMgLTQuODI0MjIsLTAuMTY0MDZsMC4wODU5NCwtMC4wNDI5N2wtMS4xNzc3MywwLjUwNTg2bC0wLjA4NTk0LDAuMDYwNTVjLTAuMjg2MjYsMC4yMDA5OSAtMC42NDA4LDAuMjM4MjMgLTAuOTYyODksMC4xMDM1MmMtMC45MDIyNSwtMC4zNzczIC0yLjMwODA4LC0xLjExODYyIC0zLjYxNTIzLC0yLjQyNTc4Yy0xLjMwNzE2LC0xLjMwNzE2IC0yLjA0ODQ4LC0yLjcxMjk5IC0yLjQyNTc4LC0zLjYxNTIzYy0wLjEzNDcxLC0wLjMyMjA5IC0wLjA5NzQ4LC0wLjY3NjYzIDAuMTAzNTIsLTAuOTYyODlsMC4wNjA1NSwtMC4wODU5NGwwLjUwNTg2LC0xLjE3NzczbC0wLjA0Mjk3LDAuMDg1OTRjMC44Mjk3NiwtMS41MTQ0NCAwLjc2NTI1LC0zLjM3MTY5IC0wLjE2NDA2LC00LjgyNDIyYy0wLjgwMDM1LC0xLjI1MTU1IC0xLjQxNDc1LC0yLjIxMDQ0IC0xLjgxMDU1LC0yLjgyODEyYy0wLjUxMjI1LC0wLjc5OTI4IC0xLjM3NjA4LC0xLjM0MDg3IC0yLjM1MTU2LC0xLjM4Mjgxek0xNy45NjI4OSwxMy4wMzMyYzAuMjgwNTIsMC4wMTIwNiAwLjU3MDE1LDAuMTc2MTcgMC43NTM5MSwwLjQ2Mjg5YzAuMzk2MiwwLjYxODMyIDEuMDEwOSwxLjU3NzY4IDEuODEwNTUsMi44MjgxM2MwLjUzMDY5LDAuODI5NDggMC41Njc5OSwxLjkxOTYgMC4wOTM3NSwyLjc4NTE2bC0wLjAyMzQ0LDAuMDQyOTdsLTAuNDgyNDIsMS4xMjY5NWwwLjA5OTYxLC0wLjE4MTY0Yy0wLjU5MTAxLDAuODQxNzQgLTAuNzA5NzksMS45MzQ4NiAtMC4zMTI1LDIuODg0NzdjMC40NTA3LDEuMDc3NzUgMS4zMTI1OCwyLjcxMjk3IDIuODU3NDIsNC4yNTc4MWMxLjU0NDg0LDEuNTQ0ODQgMy4xODAwNiwyLjQwNjczIDQuMjU3ODEsMi44NTc0MmMwLjk0OTkxLDAuMzk3MjkgMi4wNDMwMywwLjI3ODUxIDIuODg0NzcsLTAuMzEyNWwtMC4xODE2NCwwLjA5OTYxbDEuMTI2OTUsLTAuNDgyNDJsMC4wNDI5NywtMC4wMjM0NGMwLjg2NTE4LC0wLjQ3NDAzIDEuOTU1MjUsLTAuNDM0NTMgMi43ODUxNiwwLjA5NTd2LTAuMDAxOTVjMS4yNTA0NSwwLjc5OTY1IDIuMjA5ODEsMS40MTQzNCAyLjgyODEzLDEuODEwNTVjMC4yODY3MiwwLjE4Mzc1IDAuNDUwODMsMC40NzMzOSAwLjQ2Mjg5LDAuNzUzOTFjMC4wNjU2MiwxLjUxODY4IC0wLjQ2MTg0LDIuNDY5NDkgLTEuMDcwMzEsMy4xMDU0N2MtMC4zMDQyMywwLjMxNzk5IC0wLjYzNDE1LDAuNTQ4NzcgLTAuOTA2MjUsMC42ODk0NWMtMC4yNzIxLDAuMTQwNjggLTAuNTMyMzQsMC4xNjk5MiAtMC40MzM1OSwwLjE2OTkyYy0wLjE4MzQxLDAgLTAuMjgwMDEsMC4wMTIwMyAtMC41MDk3NywwLjAxNzU4Yy0wLjIyOTc2LDAuMDA1NiAtMC41Mzc3MywwLjAwNTkgLTAuOTE3OTcsLTAuMDE1NjJjLTAuNzYwNDcsLTAuMDQzMDMgLTEuODEwMTUsLTAuMTcyODUgLTMuMDc0MjIsLTAuNTI3MzRjLTIuNTI4MTQsLTAuNzA4OTggLTUuOTE3MTgsLTIuMzA3OCAtOS41NzAzMSwtNS45NjA5NGMtMy42NTMxMywtMy42NTMxMyAtNS4yNTIyMSwtNy4wNDI0NiAtNS45NjA5NCwtOS41NzAzMWMtMC4zNTQzNywtMS4yNjM5MyAtMC40ODQ0LC0yLjMxMzg1IC0wLjUyNzM0LC0zLjA3NDIyYy0wLjAyMTQ3LC0wLjM4MDE5IC0wLjAyMTE5LC0wLjY4ODIzIC0wLjAxNTYyLC0wLjkxNzk3YzAuMDA1NiwtMC4yMjk3MyAwLjAxNzU4LC0wLjMyNjIxIDAuMDE3NTgsLTAuNTA5NzdjMCwwLjA5ODc1IDAuMDI5MjQsLTAuMTYxNDkgMC4xNjk5MiwtMC40MzM1OWMwLjE0MDY4LC0wLjI3MjEgMC4zNzE0NiwtMC42MDIwMiAwLjY4OTQ1LC0wLjkwNjI1YzAuNjM1OTgsLTAuNjA4NDcgMS41ODY3OSwtMS4xMzU5NCAzLjEwNTQ3LC0xLjA3MDMxeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFX0lEQVR4nO2a228WVRTFC02xDWmtVV/wxXLzSRT1waQIXoi36IMXUEmUNngD1AZIKvgkeMGYaPQfsKhPUqOJSrzilQhi0YJJFUR5sYqIoeKFooSf2c06ye50vpnz9ZvSYlxJk87sNefMnnP2Ofus/VVV/Y84AKfZX9XJAmA6cDfwArAd6Gc4+mV7HrjLnqkaDwCagJVADyPHl8CKMRk14HTgSeCwe6HfgGPu+iVgjru+BNjoro/pmQBr6wn7OCfCgQnAEuCge4G3gFuBh3T9F3CHe2YQ7noxcES31wC3AW+79g4AbdbXaE6j11yHHwMtss0D/gGOAzcnnhviiO4tENeemad7NnqfuPZfLXy6AecA+9wUWOxsNcDXsj2c8uwwR3R/nUz2bI273wr8Ltt3wIyinLhAw23YkVxpFKiGb4BJZTgyCdgt88qEbYb6MvwMzC5iJIITHwD1CXuds19doo1UR2S71sVFXcJWD3zonJleSUyE6dQLTE7h2L5h6Mlop6Qjsu8U5c4U22Q3bfcCjSNZnXxgo2mw3DcGbJPt3gocWSbKVnfvVGCpm3oBr5S1mtnXcYHdoa8R8LeWyzWOU1+BIw0uuDuATcCA6+9bYJXbs1rL2ezCPrFM96ptWdWeYY54/CHHnrWRAa4CLgKm2ug5nn3lZi0eV2paPg286Rzxm+W7Wqar9Q42G0K85C/L2rHDPjGxROy0uiAvEr8oBzsjpd+Jbp9Zn+dEkxvClpwYCknhxcB1mhbP6Ut2A98Dh9xL9mvxsGX1PWADsBq4wfpynAkZ/Vqag1Kb0qOiuWj4LCLTNfyQ+WUiYsTxfhR1Wg7vU/Has0ghi70xpzGbu4bXC3TEgpxkipPR9468r/wnUJvT2OPiri3QkUdEfSyHV6fE1NBclbG5vRHR6cviLizQEcugDRsjuLbSGZakGe1kZ7g/oiFLVwyXFejI5aK+H8FtF3dDmvFzGS+NaOgrcc8t0JFZou6K4M4Xd1ua8VDJeTec2yfulAIdmSJqXwR3mri/Jg3VOugc82eDjIaOqqFTCnTE0np7h6MR3Bq96/Ehm7bSh5MVDf9JR6rLnFohO62N4A4iglcr6sCIp9Y4Cfazygh2y6yHB7uMpgDGLr+7xJ1VoCPni7ozgntF8jDmjSZjjuWGGF6unA2xM81o5wDDpoiGusS9ZRRSlK5KUxSfNA5RNDKSxnVjnDSeXYpkgrLhppzG7Ngbm2COVhrfnUUyZd2wPTJF6CvQkZ9EnZrD2yreA3lFmXDUnRN51G3RcdVUlRctWDWy+xI1kn4df/1R147H1+u4HDhZR925jpetcUnazxIfztTCYEJB0TggYaOphPiwJSaOvAARFJLlbudfCGxO1ECQlGOryFNycL4kn+aEHNSojexCyUH3AM9ISjJJycMkp3cSctB9su2PVhxVn0DTbJVEsoABBWaHc6Qho61B5Ah0h5VurJZ2FrLroMg/6Kb87VFOuBiw+oTHbglwDSmS6dIKHDFpNCmZNkpKNYXfI3ePKRX49jWQkDxaInZPjojdK/sey9LLdsTVKUyiRBJ/VlnhmoLLCg3ARy4uMvWuGGdmO2e+AGaOQqFnRcI2023O5sR5FTmRGJm9LrjbSpTe1pbhSEhJehOltzYnau+peCRSOm5UfSJgS9g0E8XQBXmOaCkPxdC5Ttfd4gN7xDERuZq1uqmG1vtFrjx9xNcwko7oeV+eXiThO2B/WUtshQ7ZirY+UfBP/mCgy6nn6P+gUCJu8gcHj5ZdXivQoXZXgR0JutXGiXcgDUpJ7FcRnVaWsPN0yksf1CbaKW76eWI8QovE+PjaVScB/gUcpqAaAuI+2AAAAABJRU5ErkJggg==",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoNS4xMiw1LjEyKSI+PHBhdGggZD0iTTE0LDRjLTUuNTExMzMsMCAtMTAsNC40ODg2NyAtMTAsMTB2MjJjMCw1LjUxMTMzIDQuNDg4NjcsMTAgMTAsMTBoMjJjNS41MTEzMywwIDEwLC00LjQ4ODY3IDEwLC0xMHYtMjJjMCwtNS41MTEzMyAtNC40ODg2NywtMTAgLTEwLC0xMHpNMTQsNmgyMmM0LjQzMDY3LDAgOCwzLjU2OTMzIDgsOHYyMmMwLDQuNDMwNjcgLTMuNTY5MzMsOCAtOCw4aC0yMmMtNC40MzA2NywwIC04LC0zLjU2OTMzIC04LC04di0yMmMwLC00LjQzMDY3IDMuNTY5MzMsLTggOCwtOHpNMTMsMTVjLTEuNjQ0OTcsMCAtMywxLjM1NTAzIC0zLDN2MTRjMCwxLjY0NDk3IDEuMzU1MDMsMyAzLDNoMjRjMS42NDQ5NywwIDMsLTEuMzU1MDMgMywtM3YtMTRjMCwtMS42NDQ5NyAtMS4zNTUwMywtMyAtMywtM3pNMTMuNDE0MDYsMTdoMjMuMTY5OTJsLTguOTA2MjUsOC44OTI1OGMtMS40OTI3OSwxLjQ5MDQxIC0zLjg4MDksMS40OTAyNCAtNS4zNzMwNSwtMC4wMDE5NXpNMzgsMTguNDEyMTF2MTMuMTc1NzhsLTYuNTk3NjYsLTYuNTg3ODl6TTEyLDE4LjQxNDA2bDYuNTg1OTQsNi41ODU5NGwtNi41ODU5NCw2LjU4NTk0ek0yOS45ODgyOCwyNi40MTIxMWw2LjU5NzY2LDYuNTg3ODloLTIzLjE3MTg4bDYuNTg1OTQsLTYuNTg1OTRsMC44OTA2MywwLjg5MDYzYzIuMjU1ODUsMi4yNTU4NSA1Ljk0MjAxLDIuMjU3NTEgOC4xOTkyMiwwLjAwMzkxeiI+PC9wYXRoPjwvZz48L2c+Cjwvc3ZnPg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEe0lEQVR4nO2aa6hVRRTH54qWFknmAykoe2iWJSakYXi/GGhaYlnhA0VSw7QHgvgh/aAfkggEHwmmYqkYlQpClthLsEjBrq+6PdTKPoRfykcZYZY/Wd7ZsBzOmZlz7tm7fU77BxsO+/5n1tp3z1ozs2YbU1BQUFBQUJAmQBMwGJgHbAEOA6eA8/Y6Ze9tsZrBphEAbgAWAMeonKPAS0A3U28AXYDFwB+0n9+BRUBnUw8Aw4AfSjyIDPONwNPA/UBPoJO9etp78rdNVutyHBhq8gzwAnDBcfwQMBG4uoJ+OgOTgCNOX38Ds00eAZY4zv5m32hTO/rsAMwsMSIWmzwBLHQcbAVur2H/NwP7HBvzTR4AnnAcex/omlJifU/ZuQg8Wms7FQH0Ac4qp/amma0ljwCfOGF2U1r2ggA7lDM/A70j2/WWtwc8Yy/53SuybTfghLL7rvkvAB5STvwLPBDRRh70C6t3kXufAaMi+mm2IZDwoMkaYLdyYE1Ae70zWkJsA64L9CnrhYQPav6APoC7nLn5lsCQlVkBp82nwOvAavtb9gSag75kCvQF/rFaGQ23mqwAXlaObg1sgj5WWnF0paz8Smh7AMucob0j4IfMOAkLTFYAXyrD4zy6Sc7DT4noe4KTIx73aCcr3R6TBUBX5eCFwDDVS9lXK7DximrX4tH1UiPmfCXL7aoBhijnvgrEaMKflSyOJAEC51T7Ph7tj0p3t0kb2jY2MfE/PjaWy7TXs8ZjHt0upXvEpA0wSxlc7dHNUbpVVdhZpdqX3QECm5Vuskkb4HllcLlHN0Xp3qzCjp7np3p065Vumsk4BDZ5dMOV7rsq7OiiSrNHt13pxpq0AUYogzs9uk7OPn5EBTbGqHangas82s+VdphJG+AOZfCXgFYWNrrI2T2if5naflLtXgsUTOQflJDNzhA4qYyWLXzY1Z0eBVL67uvR93eWzad9u0RgoNKeMFlBW/0+4bmAdqRTJ5QFyzpgNHCnfWjZJb5h9wgJss4fHeh7vtK/VfMHLYdkW/1WI6tGemETQhZOEwJ9NtmwSphosgK4xom95og2A4APIx7+I+DeiP4eVm1+zWQZrJE1gHJANkcdTAS2/r/E1hO+tddue29IZB8dga+V/aUma4Ab7alNwrMZ2n5R2T0TW05Lw5F5ypG/gPsysDnA5oiEuWnbNIHFjkxtCd+HSlntAbgW+EbZaxEf0rIXBdDPCYV3TEoAG5QdsdnP5AGu3B8IM1OwMd2xkd20F4OzK6tpPigR9ytM3qDtRFcquQlHa3FEZuO+1Tltzue3ArSVwXQ+eLth4z5Q1a1JPsh93JcDWOvkg0FV9HFP7uM+kA8OVJsPSsz3+Y37QD44W00+qLu4LwfwlBPDMyLazKjLuC+HPfyMygd1HfeBrzpaQvmgIeI+UEg948sHDRP35QCedGJ7uifux5tGhCuPuy7ng4aM+wryQVISS9ifeW0va+QcwckHCXLvNvN/ABjrfArTuHEf+Lyl1VZ3vWcABQUFBQUFBSYNLgGeQ4LYkUdduAAAAABJRU5ErkJggg==",
    ],
    ids: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  },
  2: {
    name: "Custom Name 2",
    image: Image2,
    bg: "#fcfcfc",
    ids: 2,
    top: CardSecondImageTop,
    bottom: CardSecondImageBottom,
    logos: [
      "https://img.icons8.com/color/100/instagram-new--v1.png",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVR4nO2Zv2sUQRTHP+evwigSrCyiAWOpTXpBxcRcCkn8BVrZif+AjUJQSA5Jo4VpbMQiJtrE/CCojZ3YGEQx9nYaE6PRxOJWBp4Qwu7czuzb3Tm4L3zhmn1vPszsm7fvoKWWgtceoArUgGlgEfgO/BWb35+A58AI0CfPBKGKLGgSWAciR/8BJoAzEqsUXQDeeyw+yQvAYJEAR4BXigBb/QLoyhviHLCSI0QkXgUu5wFgzu9QAQDRFtc03x0TaKwEiEj8QAtmpESISHwnK8SlACAi8ZUs1emn0iLMffFQSraJux/YB7QDncBRYLRBjB/AYR8QrRL7EjiQIt/VFLHmXSHOK0HMAjtS5kwDYjyQFqKidGN/kyOEMsi7tFWsT2k3hh0gXEAioDdNwEklkGOWHN3Afcn1328dYo83gtjr2cXGVZjtFoiNjPF/A7ttIFXFTjZJj5Ry9NhAakpJXltyfCniHZxWSjKXEL8iX4saOaZsIJ8V74847VKKH8lnc6KWmgjkqw1ko4lA1rVBBqT522zbdKQ9wXcd85q1JmrZA+Q0Onri0QIlarFEENNDueT9aAs2WxLINmBNs/wOlwRySPvzt98j4HXpnza7y3Ihdsf4mkfeXhuIacR+eQQtuvyuAW2NtvlpE4BMkEI9TQByKg2IOccfAgZZwEFnAwapUuA4KC+QeTzUKVPxUEBWgIN4yjSE9QBA6sBFMup2ACBDKOleiSCjKOuGwzHTAKlr7kTcX2/LBYAsucx4s3SqMzmCTAEdFKh+y5jTB+SNzJ1L03HgsYxJXUFWZfJoYgQjs8iTwE0pDHHaCTwDbgEn5JmWWiJg/QOlYrQmouYwLQAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2YzWsTQRjGQ0YQQRQEEQQRPAp6ET158uClLV4ERfGmoHjx4ElBhFIQRfwHRBQP2a22asVaommiYFra0mKDtIJai2CbtrY2O7ud/Zh9ZDcmUpq6u/mYTWEfeE8JzPOb93l3ZycWixQpUqSmFkmoJ+ISzRBZoUSmEFMKjcs0TSS1rTbzknJLnGlauSSlo+qdD928/LcStDUwQDE2TWBepojLtD94BySqhG2clGNEC8EBwjYtr64IgEQdoBs3Qps7Ka6O6ZgocBgcmGM2un+YOPJGc3/f+pTidJbhZk4XA3Ajp5cX96pNMnXNVpLOgdSsBc0Ccr85dj1XxQB8UTgWdBsH+7whzg8xeOntrIULQwxXRgV1oGDa7sJ5ZuNYeuW/AIMLHH40rdrY2yOoA9l5q7ywZQPXPupuVCr9l1ZOzypxG9j3cn3zdQc4+WFtLN7NWTicXBspP7JsiH8KPZyqvLWZvIVLIwwHXmvY1uUPIM9ssQDpvIWLwwx9M/+iVIvGl7hYgP58fYyX9Pi7KRbAeQc4ua2Xzg4w8TPQ8n4F86x2CtUCdj5TxQNseUKxv1fDq5+1xenupOFpviEA0rSPB7yHlg0bu1+o4QBs71Lx4JuJWkJ0Kuud/YYBlOpQUsOdSQNjixxLhn+ce5/9RYc0GqBUzour1+c8tH8y1j16EBEAzvndOXgdz6zg+rju+8DmfAecG/QfG9IIgKMpDckZK1D2nQPd7QkDO7r9DSwREaE9PSouj+h4NGVidJG75xnGix8pzk4P/+K4/9XEmQHmDny1xomoGWh0xSIAeaN1QGqiq0WZLgcGcO/nwzcOp+ISTVXRAbUtbOOkVJ20JTBAEULpCN28rLRXZb4MkaCtzv280JmQqOLEpuqdjxQpUqSYKP0BoMaOdbh640oAAAAASUVORK5CYII=",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Yu2sUURjFTyImwSKSCGJja6GoRUDU+b4kapMiYiFpLCyiEV9gaSdCRA2xyT+QIo9GsVGiATHgu1C08IGPShK08RVxCUbYI3fcWXRJnJnM3Z0ZvT84sAyz3z2HOzP33g9wOBwOh+N/gLuwih4208NuKo5TMUDBGAUTFNyn4AUF76j45EswRwV9/fodXDf3PKfgnv9fxSgF56g45tc2Y2xFa3LDQD0FfRRMUVEom6mdCqWxDxKoi2d+PRoomEzBNBfRNbZhefQAggsZMM0KDUQz34EmCr5kwDArNMs2rAgP4KEzA2a5oNqxI0qA3tSN6iIS9EV5/vtTN6oJ3gMKxhMN8vAGuX9DtWbgcpQAtxINYvgxT14aIrtW2g7xJEqAx4kDBMx+IIdOkB31tgLMhAdQvLIWIODlI/LIdhsBvoeuyial9QCGYpGcukjuXZssRBcawx6hz1UJEDD3jRw+Te5sXFr9LWgOm4H5qgYImHlDnuqJX38bVmcjwPRr8mR3/PqCljw/QkX2YFl6L/HkCLlnzdJrK77+1XzmP6OC6douZB/fk4OH7C1kgqc13ko02zGuZd2t/mbuwQS5b51t4yzNwHi+t9OC/nwfaDz05vtI6aHz3z/UGygYzIBhVug8YjW2FNczYJq+TAsyTmPLDwHUUXEg5dbiTf+jEre1uGAgQQvbsZGCbioOU3GGihEqrlBw26ySVLwtN3H/DF347bq55xkVd6i4WmrunqXgqF9bsMlKc9fhcDgcDuSAn9VThUlTulWSAAAAAElFTkSuQmCC",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNQlWMzd6Ij48L3BhdGg+PHBhdGggZD0iTTMwLDM3VjI2LjkwMWMwLTEuNjg5LTAuODE5LTIuNjk4LTIuMTkyLTIuNjk4Yy0wLjgxNSwwLTEuNDE0LDAuNDU5LTEuNzc5LDEuMzY0CWMtMC4wMTcsMC4wNjQtMC4wNDEsMC4zMjUtMC4wMzEsMS4xMTRMMjYsMzdoLTdWMThoN3YxLjA2MUMyNy4wMjIsMTguMzU2LDI4LjI3NSwxOCwyOS43MzgsMThjNC41NDcsMCw3LjI2MSwzLjA5Myw3LjI2MSw4LjI3NAlMMzcsMzdIMzB6IE0xMSwzN1YxOGgzLjQ1N0MxMi40NTQsMTgsMTEsMTYuNTI4LDExLDE0LjQ5OUMxMSwxMi40NzIsMTIuNDc4LDExLDE0LjUxNCwxMWMyLjAxMiwwLDMuNDQ1LDEuNDMxLDMuNDg2LDMuNDc5CUMxOCwxNi41MjMsMTYuNTIxLDE4LDE0LjQ4NSwxOEgxOHYxOUgxMXoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMC41LDM2LjV2LTkuNTk5YzAtMS45NzMtMS4wMzEtMy4xOTgtMi42OTItMy4xOThjLTEuMjk1LDAtMS45MzUsMC45MTItMi4yNDMsMS42NzcJYy0wLjA4MiwwLjE5OS0wLjA3MSwwLjk4OS0wLjA2NywxLjMyNkwyNS41LDM2LjVoLTZ2LTE4aDZ2MS42MzhjMC43OTUtMC44MjMsMi4wNzUtMS42MzgsNC4yMzgtMS42MzgJYzQuMjMzLDAsNi43NjEsMi45MDYsNi43NjEsNy43NzRMMzYuNSwzNi41SDMwLjV6IE0xMS41LDM2LjV2LTE4aDZ2MThIMTEuNXogTTE0LjQ1NywxNy41Yy0xLjcxMywwLTIuOTU3LTEuMjYyLTIuOTU3LTMuMDAxCWMwLTEuNzM4LDEuMjY4LTIuOTk5LDMuMDE0LTIuOTk5YzEuNzI0LDAsMi45NTEsMS4yMjksMi45ODYsMi45ODljMCwxLjc0OS0xLjI2OCwzLjAxMS0zLjAxNSwzLjAxMUgxNC40NTd6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIsMTloNXYxN2gtNVYxOXogTTE0LjQ4NSwxN2gtMC4wMjhDMTIuOTY1LDE3LDEyLDE1Ljg4OCwxMiwxNC40OTlDMTIsMTMuMDgsMTIuOTk1LDEyLDE0LjUxNCwxMgljMS41MjEsMCwyLjQ1OCwxLjA4LDIuNDg2LDIuNDk5QzE3LDE1Ljg4NywxNi4wMzUsMTcsMTQuNDg1LDE3eiBNMzYsMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgJYy0xLjUwMSwwLTIuMzEzLDEuMDEyLTIuNzA3LDEuOTlDMjQuOTU3LDI1LjU0MywyNSwyNi41MTEsMjUsMjd2OWgtNVYxOWg1djIuNjE2QzI1LjcyMSwyMC41LDI2Ljg1LDE5LDI5LjczOCwxOQljMy41NzgsMCw2LjI2MSwyLjI1LDYuMjYxLDcuMjc0TDM2LDM2TDM2LDM2eiI+PC9wYXRoPgo8L3N2Zz4=",
    ],
    contactLogo: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO2Zz2tTQRDH1/rzoKgX9WQx2Um1Kq2Ekp2XSG4iqEitQQWl5M0kVEG89GwFf0DFP0JBwVx60X9DRKHSiu1V6EWJtkUPiWwSSZu8X2nz8t6DfGEugdmdT2Z2d3afEH311de2NTyc2wPItwCpBIq+AdIaIFf9MVrTc0jkt4CFm3ru7RMIISTydYm07F/gziYVL0GKrm2dIJfbKRW/CAoAWoGQngsxM9B5JkIEAU2b7QzCKEyEIOiqpSke976waws6BEGjZYkty4v397qCJFJ0I+hgwR0m515WtW0v+GDB2d54AKFFT/+K4jIgPYqn+fTxzN3DkM6PSKTPPcmI4gV3EEW/XAdT/EMDtPpCJh8DpNUegJRdQTwNZNBte39zuhdZEd0AGcxO7rPzz2ZndgHShyiAVFzHUDweBZBqLFk86DTG4NjksUiAgMGjTmOcHONENECQi05jSEUPIwJCJTv/GJpnQPF6VEBWh7P39lu3/vTRbwjoYmnpQ4nafA0+3wsI6CaI7pD1mbHJN0WnogeCugs1zVZ/qfh95EBA8UoMp45s9B9SxbMS+U+0QLB2N5hrywoWHkQOBOwWPvJs9ECQ/krDvGCVGcsyU7yuD824InkiRUfrvVlnjabwA6SRlbJE85z1AUnvmtD8Sf9m3TWb017vM76BNOy7XR+mt+ZEqpjRh6bj/Jl8zMtN02+QemYsyqwTgcGjgYP8XzMJRbxVkMHs5KFQgGwAmms9Z7wI0vmRUIHUTPGK7gBa2xknSeQn4QNprp0lXW5DhnnAaf6hemfwe9sg9fcqf2Dqpr+tUEkqntLbtV4Pel79oBFH8w4g/ezKc5DXB7ogTSJ/8VBa9Dr8IPTKS0ZyoQcxChOuIMlkcTcgfQ1xNhZ1jMKL4gZf1Q9xQQcN7VaRyJc9QTRLjJ+FLhuKHovONTMgkZ6GJDOVBsSOLYA0MqPoSpBbslS8AGheEt1QbQNQPK63PUCe199HfAte1cael8gv9ZydtDZ99dWXsNU/hs5FmJLU03kAAAAASUVORK5CYII=",
      "data:image/png;base64,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",
      "data:image/png;base64,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",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFP0lEQVR4nO1Za2gdVRA+KbX4SuurYjEYyT1nb7xoUK/Jzlwi1wfiA0UqRkuihN6Zu9GAoj+kapXUVn8oxX8qWgX9URRFLS2C1P4QqSixtuIDUUEqIlgV67NWbaLM7tmkSbO797Gbh/jBgZA7O2fmzOvMHKX+x5HQPQNLNVC/Rt6kgUYN8Hca6S9Z/t9AoxroKYPVVflSpVXNN+RLlbwBfsYgHTDI/9S26HeD9HSHO2TmWn61ougdq4E3aqC/rYDjviVcWquhWhYFu7puOk6W/C3/M8j3aeD3hFa+sRZ7pL08ePScKCEnaYA/sqc7ZpA365KXq/X7HJDWQM+HChmgdzov9Fao2YTGynni8/ZEP8uBd36jvPKlygUG6XN7IF87LnWpWbSEr4RB3n5G760nNsuzAHSSRnojVCZzy0hMTLoTby+XRxanxbtY9I7SwDtCN8s0ZiSwQ3dKwxIzWcYgf2EP6gGVBYKsI9mJxpqJiSQ4WO32sx/yb+3dg6elvkFQJ/yT2qwyhkZ+we71eLqMewaWBgWMx2tJsR14y6kaaIMG2iMnK8sA7zbA63Xv6uU1JRQMrFIoDx+fniJA/X5sAI0m0iJfr4F/ianqPxuXrkviY5B3Cb3j0o3pKYK8yRfCpbVJSkxUbOBXpZKHlT3n0kUGaMtEAQVeGc+L7rd8nkxPEbl2+Eyr5Xh3spYAvitaQF5jlfnJKXqnRNHlSpWLbYZ8Nw0d7Ob0vTDt7GYnkgZoQ2iJJH4GeWtSiu3sZsfWlH3NyD5VSOQ/hWnc1VsDf5BktemnLQkgiiZfqrRaRQ6qtGCA/xCmcdVWA/0qNLVkmVBIccXYWwT6LnhApQWD/K2vSEyBCuOjFkWCdB5ksMg9Yeh0q+w3zcg+TUj6VJh2YOXsGJo9QiPZKYmfg3yJPe33o2hMic+1rvVxM7JPZQq0zRcS+IZoGl5vN95SKz+DtC6KRgMP2Kz1SjOyT2WK9FDAlB+MpOldvdwvdgHdmig6A3SPDfT9nd03nxxJh/xwkrJ1Qyxh/XVHHJ1UbNstiv9vlewkMSPLd6dJS4zlSnxtHC+NvNP3ggS6uiDFLqjGdFCySawywCul2EVeUYD3JwnXXh48QW7asjqK3rLUFLEC7vYFKdFVSbRSsaXYSTBLWrYZbZe4SZw7hdBIfdZFd6q0MVG5kZ9Nnfn0vZBfToq1huGg1xnm/iT3agYdRW+ZLcDjeXfozEw2EVexQT+QyQbKd+HbbEJ4M6s9lMbqcDgcyIJ/uTyyWCN9aXuffpUVJI2GGUl667T5G6yuCq8lMlVJm/+0zfhRa5WXsnJdA3yvyhoyPJsIRvDOSYuvdumysOGSOqJmAwbosbStIsFtspxnzQTdw23hVMVxvd5m+QW3Ab9u/JDF4C9+c6R1k13eyKJG+RQKfUvCIbbG6rCabbTBncdo4L32qr26UT4yqLAu9Umas+SG5l3SQUrXV/f3/tU/SOc55MvVHKLFAL1tc//Gej/WSM/ZpLEtG/HqfPSxj52HjOu5tX6XA7oifEus56UrU4RtrvT2tbxr+FMUoK+sIrer+YJCoW+JRvowqR0OYZCemOw3Gs94mUCmHr6LSRsbM0mxLjUu3aZx6Sw1H2H8rtAP/L0zXTP8lhlon6W5Q81XlOUaDvTWYWOclslfRxYZoNetEq9N/W0eQvdwWzj0PvwZImyVpeZk8qSWBTTQNcE7CY05bvVKjXy1fRM55GDlUrWQYCbuYvSjjICsu92tFiBaDPKL4TzryJhZQMiXKq3y4iQ9fqqPmuo/jH8B64OgpnR0V6YAAAAASUVORK5CYII=",
    ],
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  3: {
    name: "Custom Name 3",
    image: Image3,
    bg: "#fcfcfc",
    ids: 3,
    top: CardThirdImageTop,
    bottom: CardThirdImageBottom,
    logos: [
      "https://img.icons8.com/color/100/instagram-new--v1.png",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVR4nO2Zv2sUQRTHP+evwigSrCyiAWOpTXpBxcRcCkn8BVrZif+AjUJQSA5Jo4VpbMQiJtrE/CCojZ3YGEQx9nYaE6PRxOJWBp4Qwu7czuzb3Tm4L3zhmn1vPszsm7fvoKWWgtceoArUgGlgEfgO/BWb35+A58AI0CfPBKGKLGgSWAciR/8BJoAzEqsUXQDeeyw+yQvAYJEAR4BXigBb/QLoyhviHLCSI0QkXgUu5wFgzu9QAQDRFtc03x0TaKwEiEj8QAtmpESISHwnK8SlACAi8ZUs1emn0iLMffFQSraJux/YB7QDncBRYLRBjB/AYR8QrRL7EjiQIt/VFLHmXSHOK0HMAjtS5kwDYjyQFqKidGN/kyOEMsi7tFWsT2k3hh0gXEAioDdNwEklkGOWHN3Afcn1328dYo83gtjr2cXGVZjtFoiNjPF/A7ttIFXFTjZJj5Ry9NhAakpJXltyfCniHZxWSjKXEL8iX4saOaZsIJ8V74847VKKH8lnc6KWmgjkqw1ko4lA1rVBBqT522zbdKQ9wXcd85q1JmrZA+Q0Onri0QIlarFEENNDueT9aAs2WxLINmBNs/wOlwRySPvzt98j4HXpnza7y3Ihdsf4mkfeXhuIacR+eQQtuvyuAW2NtvlpE4BMkEI9TQByKg2IOccfAgZZwEFnAwapUuA4KC+QeTzUKVPxUEBWgIN4yjSE9QBA6sBFMup2ACBDKOleiSCjKOuGwzHTAKlr7kTcX2/LBYAsucx4s3SqMzmCTAEdFKh+y5jTB+SNzJ1L03HgsYxJXUFWZfJoYgQjs8iTwE0pDHHaCTwDbgEn5JmWWiJg/QOlYrQmouYwLQAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACqElEQVR4nO2YzWsTQRjGQ0YQQRQEEQQRPAp6ET158uClLV4ERfGmoHjx4ElBhFIQRfwHRBQP2a22asVaommiYFra0mKDtIJai2CbtrY2O7ud/Zh9ZDcmUpq6u/mYTWEfeE8JzPOb93l3ZycWixQpUqSmFkmoJ+ISzRBZoUSmEFMKjcs0TSS1rTbzknJLnGlauSSlo+qdD928/LcStDUwQDE2TWBepojLtD94BySqhG2clGNEC8EBwjYtr64IgEQdoBs3Qps7Ka6O6ZgocBgcmGM2un+YOPJGc3/f+pTidJbhZk4XA3Ajp5cX96pNMnXNVpLOgdSsBc0Ccr85dj1XxQB8UTgWdBsH+7whzg8xeOntrIULQwxXRgV1oGDa7sJ5ZuNYeuW/AIMLHH40rdrY2yOoA9l5q7ywZQPXPupuVCr9l1ZOzypxG9j3cn3zdQc4+WFtLN7NWTicXBspP7JsiH8KPZyqvLWZvIVLIwwHXmvY1uUPIM9ssQDpvIWLwwx9M/+iVIvGl7hYgP58fYyX9Pi7KRbAeQc4ua2Xzg4w8TPQ8n4F86x2CtUCdj5TxQNseUKxv1fDq5+1xenupOFpviEA0rSPB7yHlg0bu1+o4QBs71Lx4JuJWkJ0Kuud/YYBlOpQUsOdSQNjixxLhn+ce5/9RYc0GqBUzour1+c8tH8y1j16EBEAzvndOXgdz6zg+rju+8DmfAecG/QfG9IIgKMpDckZK1D2nQPd7QkDO7r9DSwREaE9PSouj+h4NGVidJG75xnGix8pzk4P/+K4/9XEmQHmDny1xomoGWh0xSIAeaN1QGqiq0WZLgcGcO/nwzcOp+ISTVXRAbUtbOOkVJ20JTBAEULpCN28rLRXZb4MkaCtzv280JmQqOLEpuqdjxQpUqSYKP0BoMaOdbh640oAAAAASUVORK5CYII=",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACQ0lEQVR4nO2Yu2sUURjFTyImwSKSCGJja6GoRUDU+b4kapMiYiFpLCyiEV9gaSdCRA2xyT+QIo9GsVGiATHgu1C08IGPShK08RVxCUbYI3fcWXRJnJnM3Z0ZvT84sAyz3z2HOzP33g9wOBwOh+N/gLuwih4208NuKo5TMUDBGAUTFNyn4AUF76j45EswRwV9/fodXDf3PKfgnv9fxSgF56g45tc2Y2xFa3LDQD0FfRRMUVEom6mdCqWxDxKoi2d+PRoomEzBNBfRNbZhefQAggsZMM0KDUQz34EmCr5kwDArNMs2rAgP4KEzA2a5oNqxI0qA3tSN6iIS9EV5/vtTN6oJ3gMKxhMN8vAGuX9DtWbgcpQAtxINYvgxT14aIrtW2g7xJEqAx4kDBMx+IIdOkB31tgLMhAdQvLIWIODlI/LIdhsBvoeuyial9QCGYpGcukjuXZssRBcawx6hz1UJEDD3jRw+Te5sXFr9LWgOm4H5qgYImHlDnuqJX38bVmcjwPRr8mR3/PqCljw/QkX2YFl6L/HkCLlnzdJrK77+1XzmP6OC6douZB/fk4OH7C1kgqc13ko02zGuZd2t/mbuwQS5b51t4yzNwHi+t9OC/nwfaDz05vtI6aHz3z/UGygYzIBhVug8YjW2FNczYJq+TAsyTmPLDwHUUXEg5dbiTf+jEre1uGAgQQvbsZGCbioOU3GGihEqrlBw26ySVLwtN3H/DF347bq55xkVd6i4WmrunqXgqF9bsMlKc9fhcDgcDuSAn9VThUlTulWSAAAAAElFTkSuQmCC",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiMwMDc4ZDQiIGQ9Ik00MiwzN2MwLDIuNzYyLTIuMjM4LDUtNSw1SDExYy0yLjc2MSwwLTUtMi4yMzgtNS01VjExYzAtMi43NjIsMi4yMzktNSw1LTVoMjZjMi43NjIsMCw1LDIuMjM4LDUsNQlWMzd6Ij48L3BhdGg+PHBhdGggZD0iTTMwLDM3VjI2LjkwMWMwLTEuNjg5LTAuODE5LTIuNjk4LTIuMTkyLTIuNjk4Yy0wLjgxNSwwLTEuNDE0LDAuNDU5LTEuNzc5LDEuMzY0CWMtMC4wMTcsMC4wNjQtMC4wNDEsMC4zMjUtMC4wMzEsMS4xMTRMMjYsMzdoLTdWMThoN3YxLjA2MUMyNy4wMjIsMTguMzU2LDI4LjI3NSwxOCwyOS43MzgsMThjNC41NDcsMCw3LjI2MSwzLjA5Myw3LjI2MSw4LjI3NAlMMzcsMzdIMzB6IE0xMSwzN1YxOGgzLjQ1N0MxMi40NTQsMTgsMTEsMTYuNTI4LDExLDE0LjQ5OUMxMSwxMi40NzIsMTIuNDc4LDExLDE0LjUxNCwxMWMyLjAxMiwwLDMuNDQ1LDEuNDMxLDMuNDg2LDMuNDc5CUMxOCwxNi41MjMsMTYuNTIxLDE4LDE0LjQ4NSwxOEgxOHYxOUgxMXoiIG9wYWNpdHk9Ii4wNSI+PC9wYXRoPjxwYXRoIGQ9Ik0zMC41LDM2LjV2LTkuNTk5YzAtMS45NzMtMS4wMzEtMy4xOTgtMi42OTItMy4xOThjLTEuMjk1LDAtMS45MzUsMC45MTItMi4yNDMsMS42NzcJYy0wLjA4MiwwLjE5OS0wLjA3MSwwLjk4OS0wLjA2NywxLjMyNkwyNS41LDM2LjVoLTZ2LTE4aDZ2MS42MzhjMC43OTUtMC44MjMsMi4wNzUtMS42MzgsNC4yMzgtMS42MzgJYzQuMjMzLDAsNi43NjEsMi45MDYsNi43NjEsNy43NzRMMzYuNSwzNi41SDMwLjV6IE0xMS41LDM2LjV2LTE4aDZ2MThIMTEuNXogTTE0LjQ1NywxNy41Yy0xLjcxMywwLTIuOTU3LTEuMjYyLTIuOTU3LTMuMDAxCWMwLTEuNzM4LDEuMjY4LTIuOTk5LDMuMDE0LTIuOTk5YzEuNzI0LDAsMi45NTEsMS4yMjksMi45ODYsMi45ODljMCwxLjc0OS0xLjI2OCwzLjAxMS0zLjAxNSwzLjAxMUgxNC40NTd6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTIsMTloNXYxN2gtNVYxOXogTTE0LjQ4NSwxN2gtMC4wMjhDMTIuOTY1LDE3LDEyLDE1Ljg4OCwxMiwxNC40OTlDMTIsMTMuMDgsMTIuOTk1LDEyLDE0LjUxNCwxMgljMS41MjEsMCwyLjQ1OCwxLjA4LDIuNDg2LDIuNDk5QzE3LDE1Ljg4NywxNi4wMzUsMTcsMTQuNDg1LDE3eiBNMzYsMzZoLTV2LTkuMDk5YzAtMi4xOTgtMS4yMjUtMy42OTgtMy4xOTItMy42OTgJYy0xLjUwMSwwLTIuMzEzLDEuMDEyLTIuNzA3LDEuOTlDMjQuOTU3LDI1LjU0MywyNSwyNi41MTEsMjUsMjd2OWgtNVYxOWg1djIuNjE2QzI1LjcyMSwyMC41LDI2Ljg1LDE5LDI5LjczOCwxOQljMy41NzgsMCw2LjI2MSwyLjI1LDYuMjYxLDcuMjc0TDM2LDM2TDM2LDM2eiI+PC9wYXRoPgo8L3N2Zz4=",
    ],
    contactLogo: [
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADBElEQVR4nO2Zz2sTURDH1/rzoKgX9SZIUcy+t6n0qnjzoiJViwp6URFvXno2grbZmQTEozcFBeuhF737DyhiqdrszKZ4ErxUorXooSsTI02TbHa3zWZ3IQNzCXnvzWe/8+bNvjWMgQ1sYBu2XGFumwa+ooGnNTAroF8a2YvDlcwNzBr5hVXiy7L2xgkMw9C2c1EBV+MKPIS7ps3n1w0w/tLbrJHLCQJ4a5RCQqPgDUVXIkUQejXtIBKEhe6FpIPWvsrwWJSNzWkIWndUhavDj5ztgSAm0KWkg9WBTuOBIFL2kg+UA1Sh54EgCqgScsKaBrqXt8nUxS97zWI1r5Bm+wKCNB9GkR8hnsiiALSNLVYOKaSlPsDUwoCEeCLOVb/xJtJEP1QxegFysLCww2/8ycKbLQr5XfpBgFaC5pBan34QZG/Udnd3myOHCwcyAZLDyki3OayyezgTIBr4Vrc5FPDdrIBM+6pRYqWRljMBopCWcoW5nR1bf+D3cUPonimC7Jkl50bbWHBP9ANC9xJEOmQ5M5rHmnblaPZAUFoV93q7KvQ6eyDI36wS71sz3na1Rv6dKRBdTzGaaVeF72QPBDtvfHm/zhyIAv5jonPKR5kOaUbLcmjmpmhYTbr7pTeL2mgacYA0vGaVnWM+B+SrplT8IL+1/k8qoIk0EfZ9Jk4QCfKrXx8mpdmy3eNyaHZdv1h/OZtNFqShTKc0i2I5rIykAaS+ZzTQzfWC5B8u7EkFSFOqzbSeM2HMLFbz6QJpHJrSAbS2M91MAT9IHUiTu5JuR+Dzrq7r265WwD97AVKLEeb/949pBXxbyrXsB1lXLjRMoGsK6XtProMiXNAl6Z9CKELPUhCo111VfhoGZDzpQHWAy2ePQJDRx2+3KiQnvWpQRWIMBGmock4u4pIOWrc60IoJ7plQEKswPJU6NZDuG5Gt4A0p5MlUKAO0UofwvE3Ges0qOWeTLMkKaV6V3NNGL+xfAeAxKXsa+KN8H4ktcKDF+hpIT2TNKK3NwAY2MMPX/gJAmDbI395O7wAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAIQklEQVR4nO1ae4xcVRkfqtYHvjCKLxSUKmXnnNliozQqPtBEIiqKYuShkIr+oUaNilVEBotl7/fdrYiaACZSxAd2JfFBIipCNVpR02q1z73fd3fZhipBQRFURLdjfudxe2c6c3eG2bVNw0lusvfOved878fv21rt4XWIruNo5xNMmp9qWRLD+j3LusOS3G1JHzCs/7Es9xiWzLD+0JBcblnOWLYme1rtYFjLr970KJtkb7MsNxrSBy1ra6CLZK8h/Vk9zd7dSLccfmAYoOx9hmU6EgVGDMvPLctn6ome3kjVjKzd/ZQlV2SPfmVzwyPt2MwRjfH8hXXK32BJLrSkPzIs/yh9/2dLehE0+39hwqaTr7Ck2/cRIFtNIh9YPr7rqYPuNdLc9vgGy7u8AAqG7oDZLQz1tVrNSZUlgTmEQ3dYltNqrdZhJcIWF3+n2YghuR5awb1l+bql/KRu77rfKT/JkvyiJKBvzLt2Ri+ffrJl/Wk0IZhGJOTo5vRjLMt7LOtEI9UjPdH5WXByvB8d2rDe5YRAciHuYXKG5VpLegHMzh3Uah1mKF9pSe8NPrRzdGz6mHlhYoSnn2FJfu8lJTONdPLEeGid5J2W5HZPoJc2Ipch+W+UbBsjhZPrh/Ds+HTqaEN6P6KbYfkImHNnXiZLDOlvneBY98DfhmJieZI/ybJs8RvKH06gnc9yRK3Jn44wui8CyTV4DslaljvLkakHIw+Y8eml7hvSVaXnv4vP4T+W5cdBM39spLue95CYOGOi9QhDckt06Gjro0n+kg5i/10fl+c4oliv7gyxXRnxRG+AVp1pkvyp5Oz3I+oFZhZHgRmSSQh2YEYMy6XhwN2jayefjWf1VF5lWf/eTqx8xb0/Pr3Ussz2zYiX9JuCAD5efm5gmomeW2iGdFP4bWIgJmySrQBRyMh11pfF5/Vk8njLcqWz63hwkq0IjH++W9KrYgTSxm94JyZU46oAnagn8tJ4LszKkPzV/56dM4BJeUezJKvjQXXOjt238ZbDkdFBPO6XN/c8Lh40kEZYZuO+hvRiRL9y2QJftGOTz/e/52eHb+5EFO1DG3puMCmF/QYivg11G5IbkBBrzdai8jeI9w3O34rQaki/akluNqybkfljonTC8dEPYXzCkH4W0l36uduf2UlDI1VjSa6yLP/Cd8hh8CfLemvQ2ppqLpqtRYjd3k7zswMTb+liEnsM6ZeK+D8fC4SSrPaJttOXdBVeqaf5i0ME/VulVhqJvC58nDspNFuLDMuu7kWfzMbM66RMut6SXOJNIH+tJXmRS2Yh89skO6o+NjXqAgYKTdJVhmSdYfl1KfvPdC8u9d4YsVCjlXNR12VYvuk4TuST7p7kzb0qVzCIdxDRqircah8pCH2NP0+/W/HOBU4riZ4e7jd1ZcLFbJ9l944k+XM993JzBZHfchujmh2SkTrLx8J5l/TeS2agXWR/9DZ41rV8QZgNMXwr7pdckT2xqscwnH8iSPHiYRlBgdjLH23pGuHJZcFSbgh+vHI/RopSgfQLbSrsdYWEhfJkaNNi3eh8NJ08sWqvaPKW5f1BAOu6+ce1nhE5PzjweNWmMKmgke8PrRGWzFtFdmyl8Fhu9EEpf7lnRH+1v0ZYN7qXkSdK6uutEZ/RLekvh9eI3FNqF1o9L9LtXnN6ZBD63d004sMsTR0XDt5cqZGQkS2rDM0IyV60zzXXj1T4Jck/XTh3yVFm8V1ncoaJ3IGXY4F4sC8bmi8EpUOUER7MtJaRviB8l82HacV6ygxrWoeOs5OsO2Dhl2Qy9uq2Yi+c1RZ+WW/rZnOxd/5iP1l2IRKidQ1dBSOhmqhMiEWJwroN96hs0Y/33LQoLIcvUYB59VNN1MemRucsURwMynofHAgwTVvJfJAVjSZ0o5HO/c0LaKD3EweiNdLsjXPZ9XyU8XWSV8/lb4bko44mdKKext90ZaJrY+Xbyx09JDQLhCOo+hbXy5Be1Ej1HY1UT26MZydUNVawd8t6HfqKfhqrJSFfRKzLpPrB6lY3EB7RCuC7XTbejRlHXyBAv8sL7TJouler6zE13+rOiXE5GNSHuqkVa3c/1jFDuj7AoB6mKQHXRe+Sytvh+KHLvBWgQVfwgXRDaItXW9IzAcl20mA4bwDsQwLsAB88/sxyaV9wUATEgHTgGewcMb4NSiU9M4ZqwEGxaxvMR2Q27guzNJSvLI8n8G2Eg6KAgUr2jTgGWNQBdG2jADcq0C8DponERFDbj9MGY8SQ3hQzdRtAR7q+DNCh0oY5+e/ys2qDrBgKXTGZZEctBGQaq4M2IJsDMyHhutlkROZJrq8NuryJefABSbINxC6BzkiaBVjBcmW/jCDSwe7hhx373Qf0xllAc9viEiK/c79Kt9+FDwH1h4O3xhLfjRVIbyoRta4o+tqJ6jlW2FdluzAcNbEZc8aoiZIg9ww98HH4a5iRIOwWtouSm7NzikFPUTXr6+ca9GDm6Bgfmz4mAOJ/sawfjlMwMBOHSzDt0UTqtflYfuATcFc3vdVPx+mSw5lIzi+P3pAUe4/efE6Iozdk7CIKNZHH3BjP+yHp9p5lyENdiOUAj6NDI3GhXCg3NuUBJ5wfOaXI2qRfK48oOoehCCSG9baSWV4XK4cFWegFMIYr2ft2lAtRG4OsUGGfVzR1HM3XT6wWfLlRNel7UZO1hUzWjUiioZZqILlhNOEq67GZI8Kg6DTL8inD8hNk7tL3d6E1OCD/AQGGIL0APvfsXXpfzkzhe+cdEAa6LRDSYDkFhZ9l/Y4zOfxbhh/WPBhG0LsMyQ8s6VoIIPrPw+tQXP8D7emWXhnghqoAAAAASUVORK5CYII=",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZklEQVR4nO1aS4gcZRBuX/EBvvB5EKIQUHf+mhFHRDxEEFHEx3oxGPXiwVPQBI9eBoS4U9W7JIuCBiQHRQSPmmiih+RmkFyEZR9d1VkTE4mv4CNiNGpL9fy9M2737P7d07PTSgoKZnZmauur119Vf3veOfqfEkwcvdogPwEoPhDvNcTzQHwKSH7vMJ8C5Dn9zH5nvLFj8SqvCrRhOrjYYPgMoOw3yH8CSZSH9TcG5WOg8GmV5a013TN17FJD/JIhOZFX+f6g5DiQbFvfWrxkTUCALw8DipQFIIO53uaHhgZAXQ/I00MEsJzfVs+XCsJsD28AlMNrCCKKGfnzui/XlwKiMbF4s7p7zUGQzR3iQHUYCMQd24PrOmV0NCBgyTMiY7R4YyEQWj1GEk7UP8wKlWggfmPkylOKX8tfYkevdJTFNQoezHFa88KoFYb+zE6Hpp7YFVA2WpFRtjp4I24VoiqzIflqxcSPG0AHQd6QCdy8srm/AJT9LkLqvjw1LBCmLc85eQX5o5XmCbdWHPlvQH65VARRdB4gv5IjvM5umA6uSFtChyJXIQlglLeauw5fNCiGsdbMOkB5J1HQVY+6HzyWEgYkk+4Jx+MG5bR9/UmzHV5ZFIRGAqAcsLJ/znOGGWLKAMJ7XQXo92sTRxpaPawVZ273j6zPC6Luz98CJLM2XL8G5DutUR0jQz5ICdUuMw8QJe1KFcSSIpPSdAXRaId3A/FJ+9svoB3c1DWqs0fm0x5B/iEvEKVbce5yrSDWQqcB+fHVQGg+GuJfLYhPl4cmuCf8t2kgnW1HbiBK97UOXAjIbyaFwPjyYj8Qeip3qyPvzioW4JqrKGdKBRJbmcI6oPzUjV/e4bWi85PPn3w/usAQ7+wJix8bba5lgqXBgHxfFIih4NmlUNHkRTljLf6h5lGc1Mh7kn/eM6z9YnzeVBSIQfkubdEcHW9v/Tcor3c/4926MAB/YWNmzunf/IWNzdaJy3S50GPZKQ1PL7dHeC7tkcRijkC0yhiSzyyA34D4+V55Wo4N8nsG+RvL7y4v0UC8pSekD+qSY+Dy21ljugmo+3K/Kmet8qVBucsrSLU235t03AbluL53B8KYBkI8nkNAXHUMyb7bXp29xitj3URy0Mp3Ljo1DB9NCdOFsvv+lv/SBq+3Kg1KnRIuU3FD6hZWf2Q2jbFlSPY5CfHDR8oCkNLB502Oib6nrxDdirsm+zAJBp2J/kuj7lhrZt1q1thWfSD8wqpujb1ShTUp9QUROG8c9X5i1ApDFscVLXzAy0P/bj2qwYZ4Zy4QSYjp4rgyIFAOrZrg/ag5OX9tJfIFRZI+rDB1xln3Mbh8T/BCkX1AJun11yjCzKAc0ssmbyiXoY69UAm8a6h373o/McxQM3FO5iyxg3lHtiZ7rZIS+pie2CN5AsIC2tx59sR91dm1vpzVLlYbwMKltWzS2UB3sbrG1KVD5wGaeKFhH6qJX8/qeKqTnQ5FuhMrXZFz5FWD/gEfnyUlPavYKgAAAABJRU5ErkJggg==",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFRElEQVR4nO1aa2gcVRS+LVV8xfpGUVCwNnH33kk0iv4QtiriA0UsPkr95d+C4h+pWmXbats5dzYVf6jUB+iPoihqaRGkFipSUWpti0Zj5pxp0kohrWI1vqI2WTl37mybNDOz2Z1JNuIHA8vumXPPued5z10h/seJWPC8f6bSwVKp6RUFuFNqOiyB/jaPpsPmO6CXHY+WtENfm2g1KNjXrjS+JgH/UJqq9TxS4+8K6NUuoCtmWn7RXT54mtJUkZr+MQICjvGuK40rJPglVtDx9p7OD38Ov6OnlMYvDC0rZKyF+tLywCkzogTvpAT8OtxhHJWAG4vav7ze9wtrcYEEfLOmkKbPOtYPXiSmE07Fv8r4vNlR7FeAVzfKSwJdIzX6VpnvpQ4cMW2WsEoojVvVuv1nN8uz0HPgHAX4UaRM7pbhmDjOnbaWytvnZcZ7w66TpMZtkZvlGjMc2DV3ysASk1pGE9qNWiXygMk6JjvhaDMxkYaiF1zLCUAC/VbQAxdmvgDXCWuNjZkzP2Etesuu9WLmFTssYDhWT4p1PLpAanxGAe3hnbXPbgW4umuNf349CUVFVin3npGZItx22IK3M5XW9e9VmoZjqzrQL0WXFqfyAdrF9EXABzJTxPROYQCuSFXCFjil6X2u5FFlL3q4SAJtqhVQTfekrPm05bMhM0XCtoN91i8luVPNEkCPxfOi5bbX+rm78t15cXRFwBttC/O5yAoS6Adm6lSChbE0HBPWEnXw25yWYp1KsNAG/CGRFZSmv5hpUuutNO5Ns9oku707jqYd+tqsdUeakX2ikH8y06RqqzT9yjT1ZJmakJqGUzrrKh8NmpF9gpA4ZIRMKFBRfNSjSHgACzNYHE1nT//Ftl052Izs44UE7DMx4pGMp6E9Jl16uCiNn+PRTVbIL+NoCrq/y9L0NiP7eCE1bjFMPbw/lgZwtfX7TfXyU4Ar42gkBA9amveakX08U01rrJDPxtFwxWZXsS6zPJaXi09Y3z/Ssfbbc2PpACFN2SmDLWFz/7YkOq7YpqkMld7M2Yljhp/QnawlDA3encRLAe6wtIl0U0JY7LjrpRHOJkm0XLG52MUOHQCPpAnX+dzAWdxp89PtBvMzU8QIyE1fuNN3pNFyxeZix8Fs0/Kw6Z0AVya5UwSl8T7rVjtE1ogqt9T4usgZSuO7abHWMGRloCPK/Wnu1Qy63WC+KcCAY53rBi7LZRHrKlVOjbksIIzlH7bx9HFeawgF/rJoOJAH/1J5+zwJtC9UJFgq8gKn0Sgj8dk6a/6OR0uitoSnKiJPSE3r7WLv5OW6CvBJkTd4eBYFo3IDlRVf6Qa3RAcuriNZ8U1eVNMLWVuFg1vlOc+adFHXvySaqjhucEOz/LgbsJnqxzwGf4ngKl075ZWrcxvlUyj3nhwNsRX4y8R04/qeA6cqwEGjjEsPNcqHBxW20H6T5Sy5sXmXxiE+9U31fW79o3TuuHirmDFUq3OUpk+tf1em+roEesNuxBYx03D40sdceOJRx+u/ru73NN4W3SVO5aYrV0THXD7b13OvEU5RcH94fKZHRKugEGaer9KOwxGUxpdq540mMl4u4KkHuxifJJMmKcalzO0vjRTd/itFK0JpXGV3enCyNsNcNwAessnhUdGqKHEbrvGT2hinWp1T+7FcnSs1fWiz1AfjfmtFKG5f7ND7+GuIY0NuHMrlSi0POJ5/V3hPgqPKo9uLENxp/1RwVAHdLGYTlO3FlMafwhEQ14zgcTHrUDVV/+1jV24TYmY2oR362vjGic/4mV5qiv8w/gW7QzOTIkle8AAAAABJRU5ErkJggg==",
    ],
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  },
  4: {
    name: "Custom Name 4",
    image: Image4,
    text:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  },
  5: {
    name: "Custom Name 5",
    image: Image5,
    text:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
  },
  //   6: {
  //     name: "Custom Name 6",
  //     image: Image6,
  //     text:
  //       "Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  //   },
};

export default data;
