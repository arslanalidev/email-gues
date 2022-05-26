import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;

const HeaderComp: React.FC = () => (
  <Header
    style={{
      position: "fixed",
      zIndex: 1,
      width: "100%",
      display: "flex",
      alignItems: "center",
    }}
  >
    <svg
      className="babbel-logo"
      fill="none"
      height="32"
      width="94"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <path
        d="M29.024 15.304c1.411-.821 2.209-2.193 2.378-4.089.145-1.66-.357-2.95-1.5-3.834-1.116-.864-2.504-1.301-4.124-1.301h-5.341l-.02.001a1.931 1.931 0 00-1.034.305 2.069 2.069 0 00-.491.429 1.852 1.852 0 00-.47 1.069l-1.425 16.042c-.038.436.079.817.334 1.143.103.136.219.258.36.357.274.194.597.294.963.302.007 0 .012.001.018.003a.083.083 0 00.019.002h6.349c1.804 0 3.41-.455 4.774-1.355 1.398-.922 2.186-2.289 2.344-4.061.12-1.329-.14-2.467-.77-3.373-.523-.756-1.317-1.31-2.364-1.64zM21.756 9.21h3.214c.842 0 1.526.216 2.027.64.49.413.697.989.628 1.759-.082.909-.394 1.571-.93 1.968-.568.421-1.223.625-2 .625h-3.383l.444-4.992zm5.556 12.737c-.694.435-1.581.652-2.637.652h-4.108l.444-5.008h4.249c1.133 0 1.995.073 2.5.518.53.468.732 1.037.664 1.817-.085.949-.449 1.613-1.112 2.021zM9.4 8.97c.596 0 1.096.297 1.364.75.171.275.242.59.212.948 0 0-.004 2.098-2.608 2.098-.319 0-1.03-.015-1.03-.015l.184-2.083c.023-.237.088-.457.196-.66A1.926 1.926 0 019.4 8.97zm4.628 4.996c.26 0 .491.056.7.156.572.266.938.855.877 1.541-.064.707-.552 1.311-1.194 1.57a1.886 1.886 0 01-.683.133H10.38l-.293 3.293c-.021.257-.1.489-.22.703-.324.586-.96 1-1.657 1-.714 0-1.289-.43-1.498-1.039a1.58 1.58 0 01-.075-.664l.293-3.293H3.58c-.24 0-.461-.05-.66-.135-.596-.257-.975-.861-.914-1.568.054-.585.4-1.103.89-1.408.293-.19.624-.289.987-.289h10.145zm22.204-1.172a10.5 10.5 0 013.78-.71c1.811 0 3.147.502 3.97 1.498.68.842.956 2.036.82 3.55l-.612 6.91a1.743 1.743 0 01-.613 1.182 1.863 1.863 0 01-1.253.482c-.631 0-1.1-.236-1.368-.68-1.002.452-2.175.68-3.495.68-1.273 0-2.348-.36-3.19-1.07-.862-.722-1.243-1.729-1.13-2.989.142-1.609 1.135-2.783 2.95-3.484 1.134-.44 2.861-.756 5.272-.962l.006-.07c.067-.752-.039-1.321-.315-1.689-.316-.41-.838-.611-1.593-.611-.72 0-1.495.169-2.304.5-1.013.417-1.357.464-1.528.464-.377 0-.685-.127-.913-.372-.23-.247-.33-.561-.297-.934.06-.674.67-1.245 1.813-1.695zm2.358 10.272c.769 0 1.543-.199 2.305-.594l.243-2.752c-2.136.143-4.556.59-4.67 1.87-.043.467.125.817.51 1.066.417.273.96.41 1.612.41zm14.444-10.983a8.88 8.88 0 00-2.855.475l.427-4.786a1.507 1.507 0 00-.1-.702c-.22-.583-.775-.987-1.468-.987-.593 0-1.142.293-1.49.744-.219.276-.346.59-.376.945l-1.406 15.8c-.09 1.035.385 1.697 1.383 1.91.785.148 1.842.224 3.136.224 2.798 0 4.99-.784 6.519-2.327 1.152-1.15 1.82-2.66 1.981-4.487.181-2.046-.252-3.702-1.286-4.927-1.06-1.25-2.562-1.882-4.465-1.882zm1.233 9.355c-.829.91-1.964 1.356-3.472 1.356-.62 0-1.13-.022-1.521-.057l.643-7.215a5.694 5.694 0 012.266-.471c.988 0 1.761.322 2.356.986.607.707.862 1.671.758 2.855-.092 1.033-.439 1.89-1.03 2.546zm9.957-8.88a8.855 8.855 0 012.852-.475c1.9 0 3.405.632 4.464 1.882 1.04 1.225 1.47 2.881 1.29 4.927-.164 1.828-.83 3.337-1.983 4.487-1.53 1.543-3.725 2.327-6.517 2.327-1.3 0-2.354-.076-3.139-.224-.997-.213-1.475-.875-1.38-1.91l1.401-15.8c.032-.355.16-.668.378-.941a1.895 1.895 0 011.49-.748c.699 0 1.257.41 1.475.995.08.212.114.443.093.694l-.424 4.786zm.614 10.236c1.507 0 2.642-.446 3.473-1.356.59-.657.936-1.513 1.028-2.546.105-1.184-.15-2.148-.76-2.855-.592-.664-1.363-.986-2.353-.986a5.68 5.68 0 00-2.267.471l-.641 7.215c.39.035.899.057 1.52.057zm16.3-10.71c-2.032 0-3.73.63-5.048 1.878-1.334 1.259-2.096 2.866-2.264 4.768-.18 2.03.29 3.7 1.399 4.959 1.141 1.337 2.847 2.017 5.064 2.017 1.432 0 2.782-.259 4.018-.77 1.025-.435 1.575-.992 1.634-1.665a1.347 1.347 0 00-.291-1.003c-.306-.379-.722-.532-1.316-.392-.142.035-.27.087-.377.146a2.98 2.98 0 01-.334.164l-.182.083a8.179 8.179 0 01-.236.106c-.809.35-1.64.528-2.47.528-1.21 0-2.09-.377-2.7-1.143-.39-.49-.618-1.094-.676-1.808h7.662c.533 0 .982-.18 1.33-.538.339-.347.534-.789.581-1.318.15-1.683-.267-3.1-1.246-4.22-1.104-1.19-2.634-1.793-4.549-1.793zM77.57 17.45c.15-.644.445-1.194.878-1.64.615-.603 1.422-.898 2.464-.898.93 0 1.623.277 2.11.84.378.473.566 1.028.572 1.698H77.57zM92.56 6.828c.167.275.24.589.208.944l-1.446 16.27a1.717 1.717 0 01-.218.698c-.324.583-.954.993-1.649.993-.71 0-1.284-.426-1.492-1.033a1.588 1.588 0 01-.075-.658l1.445-16.27c.022-.235.087-.456.195-.658.314-.604.962-1.031 1.673-1.031.594 0 1.09.295 1.359.745z"
        fill="#FF790F"
        clip-rule="evenodd"
        fill-rule="evenodd"
      ></path>
    </svg>

    <Typography.Title
      level={2}
      style={{ marginBottom: 0, color: "white", marginLeft: 20 }}
    >
      Email Finder
    </Typography.Title>
  </Header>
);

export default HeaderComp;