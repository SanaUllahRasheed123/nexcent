import React from "react";
import { Helmet } from "react-helmet";
import { Input, Img, Heading, Text, Button, Slider } from "../../components";

export default function LandingPagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <>
      <Helmet>
        <title>Landing Page</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full overflow-auto bg-white-A700">
        <header className="flex justify-center items-center w-full p-[22px] sm:p-5 bg-gray-100_01">
          <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1215px]">
            <div className="flex flex-row justify-start items-center gap-2">
              <Img src="images/img_icon.svg" alt="icon_one" className="h-[24px]" />
              <Img src="images/img_nexcent.svg" alt="nexcent_one" className="h-[20px]" />
            </div>
            <div className="flex flex-row md:flex-col justify-between items-center w-[74%] md:w-full md:gap-10">
              <div className="flex flex-row justify-center w-[65%] md:w-full">
                <ul className="flex flex-row justify-between w-full">
                  <li>
                    <a href="#">
                      <Text as="p" className="!text-gray-900 !font-medium">
                        Home
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer hover:font-medium">
                      <Text as="p" className="!text-gray-900">
                        Service
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer hover:font-medium">
                      <Text as="p" className="!text-gray-900">
                        About
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer hover:font-medium">
                      <Text as="p" className="!text-gray-900">
                        Product
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer hover:font-medium">
                      <Text as="p" className="!text-gray-900">
                        Testimonial
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="cursor-pointer hover:font-medium">
                      <Text as="p" className="!text-gray-900">
                        FAQ
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
              <ul className="flex flex-row justify-start gap-3.5">
                <li>
                  <a
                    href="#"
                    className="flex justify-center items-center h-[40px] px-5 py-[11px] bg-gray-100_01 rounded-md"
                  >
                    <Text size="s" as="p" className="!text-green-500 text-center !font-medium">
                      Login
                    </Text>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex justify-center items-center h-[40px] px-5 py-[11px] bg-green-500 rounded-md"
                  >
                    <Text size="s" as="p" className="!text-white-A700 text-center !font-medium">
                      Sign up
                    </Text>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full gap-[39px]">
          <div className="h-[599px] w-full relative">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 1 } }}
              renderDotsItem={(props) => {
                return props?.isActive ? (
                  <div className="h-[10px] w-[10px] mr-2 bg-green-500" />
                ) : (
                  <div className="h-[10px] w-[10px] mr-2 bg-green_500_75" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex flex-row md:flex-col justify-between items-center p-24 mx-auto md:gap-10 md:p-5 bg-gray-100_01">
                    <div className="flex flex-col items-start justify-start w-[53%] md:w-full ml-12 gap-8 md:ml-5">
                      <div className="flex flex-col items-start justify-start w-full gap-[19px]">
                        <Heading size="lg" as="h1" className="flex">
                          <span className="text-gray-800">Lessons and insights </span>
                          <span className="text-green-500">from 8 years</span>
                        </Heading>
                        <Text as="p">Where to grow your business as a photographer: site or social media?</Text>
                      </div>
                      <a
                        href="#"
                        className="flex justify-center items-center w-[20%] h-[52px] px-8 py-4 sm:px-5 bg-green-500 rounded"
                      >
                        <Text as="p" className="!text-white-A700 text-center !font-medium">
                          Register
                        </Text>
                      </a>
                    </div>
                    <Img src="images/img_illustration.svg" alt="illustration" className="h-[407px] mr-12 md:mr-5" />
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-4 md:px-5 max-w-6xl">
            <div className="flex flex-col items-center justify-start w-[97%] md:w-full gap-3">
              <Heading size="md" as="h2" className="text-center">
                Our Clients
              </Heading>
              <Text as="p" className="text-center">
                We have been working with some Fortune 500+ clients
              </Text>
            </div>
            <Img src="images/img_clients_logos.svg" alt="clientslogos" className="h-[98px]" />
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-4">
            <div className="flex flex-col items-center justify-start w-full gap-2.5">
              <Heading size="md" as="h2" className="w-[38%] text-center">
                Manage your entire community in a single system
              </Heading>
              <Text as="p" className="text-center">
                Who is Nextcent suitable for?
              </Text>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-[127px] md:gap-10 md:px-5 max-w-6xl">
              <div className="flex flex-col items-center justify-center w-[26%] md:w-full gap-2 p-4 my-2.5 md:mt-0 bg-white-A700 shadow-xs rounded-lg">
                <div className="flex flex-col items-center justify-start w-full mt-2 gap-4">
                  <Img src="images/img_icon_green_50.svg" alt="image" className="h-[56px]" />
                  <Heading size="s" as="h3" className="text-center !leading-9">
                    Membership Organisations
                  </Heading>
                </div>
                <div className="flex flex-row justify-center w-[95%] md:w-full mb-2">
                  <Text size="s" as="p" className="text-center !leading-5">
                    Our membership management software provides full automation of membership renewals and payments
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[26%] md:w-full gap-2 p-4 bg-white-A700 shadow-xs rounded-lg">
                <div className="flex flex-col items-center justify-start w-full mt-2 gap-4">
                  <Img src="images/img_icon_green_50_56x65.svg" alt="icon_one" className="h-[56px]" />
                  <Heading size="s" as="h4" className="text-center !leading-9">
                    National Associations
                  </Heading>
                </div>
                <div className="flex flex-row justify-center w-[90%] md:w-full mb-2">
                  <Text size="s" as="p" className="text-center !leading-5">
                    Our membership management software provides full automation of membership renewals and payments
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[26%] md:w-full gap-2 p-4 my-2.5 md:mt-0 bg-white-A700 shadow-xs rounded-lg">
                <div className="flex flex-col items-center justify-start w-full mt-2 gap-4">
                  <Img src="images/img_icon_56x65.svg" alt="icon_one" className="h-[56px]" />
                  <Heading size="s" as="h5" className="w-[87%] text-center !leading-9">
                    Clubs And Groups
                  </Heading>
                </div>
                <div className="flex flex-row justify-center w-[95%] md:w-full mb-2">
                  <Text size="s" as="p" className="text-center !leading-5">
                    Our membership management software provides full automation of membership renewals and payments
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[42px] gap-12">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-start items-center w-full pl-36 pr-14 gap-[49px] md:gap-5 md:px-5">
              <Img src="images/img_frame_35.svg" alt="image" className="h-[433px]" />
              <div className="flex flex-col items-start justify-start w-[54%] md:w-full gap-8">
                <div className="flex flex-col items-center justify-start gap-4">
                  <Heading size="md" as="h2">
                    The unseen of spending three years at Pixelgrade
                  </Heading>
                  <Text size="s" as="p" className="!leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam
                    vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam
                    quam vitae, tempus sem. Donec elementum pulvinar odio.
                  </Text>
                </div>
                <a
                  href="#"
                  className="flex justify-center items-center w-[23%] h-[52px] px-8 py-4 sm:px-5 bg-green-500 rounded"
                >
                  <Text as="p" className="!text-white-A700 text-center !font-medium">
                    Learn More
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-center items-center w-full gap-[72px] px-14 py-16 md:gap-10 md:p-5 bg-gray-100_01">
            <div className="flex flex-col items-start justify-start w-[41%] md:w-full gap-2.5">
              <div className="flex flex-row justify-start">
                <Heading size="md" as="h2" className="flex">
                  <span className="text-gray-800">Helping a local </span>
                  <span className="text-green-500">business reinvent itself</span>
                </Heading>
              </div>
              <Text as="p" className="!text-gray-900">
                We reached here with our hard work and dedication
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[41%] md:w-full">
              <div className="justify-center w-full gap-[30px] grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img src="images/img_icon_green_500_48x48.svg" alt="image" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-center w-[75%] gap-px">
                    <Heading size="s" as="h3" className="mt-px">
                      2,245,341
                    </Heading>
                    <Text as="p">Members</Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img src="images/img_icon_green_500.svg" alt="icon_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-center w-[75%] gap-px">
                    <Heading size="s" as="h4" className="mt-px">
                      46,328
                    </Heading>
                    <Text as="p">Clubs</Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img src="images/img_icon_48x48.svg" alt="icon_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-center w-[75%] gap-0.5">
                    <Heading size="s" as="h5" className="mt-0.5">
                      828,867
                    </Heading>
                    <Text as="p">Event Bookings</Text>
                  </div>
                </div>
                <div className="flex flex-row justify-start items-center w-full gap-4">
                  <Img src="images/img_icon_1.svg" alt="icon_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-center w-[75%] gap-0.5">
                    <Heading size="s" as="h6" className="mt-0.5">
                      1,926,436
                    </Heading>
                    <Text as="p">Payments</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-end items-center w-full pt-1 gap-[115px] px-1 md:gap-10">
              <div className="flex flex-col items-center justify-start w-[23%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[428px] w-[99%] md:w-full relative">
                    <div className="flex flex-col items-end justify-start w-[67%] right-0 top-0 m-auto absolute">
                      <Img src="images/img_padlock.svg" alt="padlock_one" className="h-[102px] mr-1 z-[1]" />
                      <div className="flex flex-row justify-end items-center w-full mt-[-57px]">
                        <div className="h-[304px] w-[71%] sm:w-full z-[1] relative">
                          <Img
                            src="images/img_vector.svg"
                            alt="vector_one"
                            className="h-[50px] bottom-[20%] right-0 m-auto absolute"
                          />
                          <div className="justify-center h-[304px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Img
                              src="images/img_vector_blue_gray_700.svg"
                              alt="vector_three"
                              className="justify-center h-[304px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                            />
                            <div className="justify-center h-[284px] w-[91%] sm:w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                              <Img
                                src="images/img_vector_white_a700.svg"
                                alt="vector_five"
                                className="justify-center h-[284px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="flex flex-col items-center justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
                                <div className="flex flex-col items-center justify-start h-[14px] w-[13px] md:w-full">
                                  <div className="flex flex-col items-center justify-start h-[14px] w-[13px] md:w-full">
                                    <Img
                                      src="images/img_vector_green_500.svg"
                                      alt="vector_seven"
                                      className="h-[14px] w-[13px]"
                                    />
                                    <Img
                                      src="images/img_vector_black_900.svg"
                                      alt="vector_nine"
                                      className="h-[14px] w-[13px] mt-[-14px] opacity-0.1"
                                    />
                                  </div>
                                </div>
                                <div className="h-[6px] w-[45%] mt-[3px] opacity-0.2 bg-white-A700_6c" />
                                <div className="flex flex-col items-start justify-start w-full mt-[19px]">
                                  <div className="h-[5px] w-[25%] ml-px md:ml-0 opacity-0.1 bg-black-900_63" />
                                  <div className="h-[18px] w-full mt-1.5 relative">
                                    <Img
                                      src="images/img_vector_gray_300.svg"
                                      alt="vector_fifteen"
                                      className="justify-center h-[18px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <div className="h-[4px] w-[46%] left-[8%] top-[32%] m-auto opacity-0.2 bg-white-A700_6c absolute" />
                                  </div>
                                  <div className="h-[5px] w-[25%] mt-3.5 ml-px md:ml-0 opacity-0.1 bg-black-900_63" />
                                  <div className="h-[18px] w-full mt-1.5 relative">
                                    <Img
                                      src="images/img_vector_gray_300_18x106.svg"
                                      alt="vector"
                                      className="justify-center h-[18px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <div className="h-[4px] w-[46%] ml-[7px] left-[7%] bottom-0 top-0 my-auto opacity-0.2 bg-white-A700_6c absolute" />
                                  </div>
                                  <div className="h-[5px] w-[25%] mt-4 ml-px md:ml-0 opacity-0.1 bg-black-900_63" />
                                  <div className="h-[18px] w-full mt-1.5 relative">
                                    <Img
                                      src="images/img_vector_18x106.svg"
                                      alt="vector"
                                      className="justify-center h-[18px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <div className="flex flex-col items-center justify-start w-[53%] bottom-[36%] left-[7%] m-auto absolute">
                                      <Img
                                        src="images/img_group.svg"
                                        alt="image_one"
                                        className="h-[4px] z-[1] opacity-0.2"
                                      />
                                      <div className="flex flex-row justify-start w-full mt-[-4px] gap-0.5">
                                        <Img
                                          src="images/img_vector_green_500_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px]"
                                        />
                                        <Img src="images/img_vector_4x4.svg" alt="vector" className="h-[4px] w-[4px]" />
                                        <Img
                                          src="images/img_vector_green_500_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px]"
                                        />
                                        <Img
                                          src="images/img_vector_green_500_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px]"
                                        />
                                        <Img
                                          src="images/img_vector_green_500_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px]"
                                        />
                                        <Img
                                          src="images/img_vector_green_500_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px]"
                                        />
                                        <Img
                                          src="images/img_vector_4x4.svg"
                                          alt="vector_fortyone"
                                          className="h-[4px] w-[4px]"
                                        />
                                        <Img
                                          src="images/img_vector_green_500_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px]"
                                        />
                                        <Img
                                          src="images/img_vector_green_500_4x4.svg"
                                          alt="vector"
                                          className="h-[4px] w-[4px]"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="h-[24px] w-[74%] md:w-full mt-[31px] ml-2.5 md:ml-0 relative">
                                    <Img
                                      src="images/img_vector_green_500_24x79.svg"
                                      alt="vector"
                                      className="justify-center h-[24px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                                    />
                                    <Text
                                      size="xs"
                                      as="p"
                                      className="w-max top-1/4 right-0 left-0 m-auto !text-gray-300_01 !font-montserrat !text-[8.13px] absolute"
                                    >
                                      SING UP
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          src="images/img_vector_green_500_112x85.svg"
                          alt="vector"
                          className="h-[112px] ml-[-24px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-end items-start w-[21%] bottom-[21%] right-[1%] m-auto absolute">
                      <Img
                        src="images/img_vector_blue_gray_900_01_145x62.svg"
                        alt="vector_fiftyone"
                        className="h-[145px] z-[1]"
                      />
                      <div className="flex flex-col items-start justify-start w-[91%] mt-[17px] ml-[-56px] gap-[27px]">
                        <div className="flex flex-row justify-start items-center ml-3 gap-px md:ml-0">
                          <Img src="images/img_vector_blue_gray_900_01_33x4.svg" alt="vector" className="h-[33px]" />
                          <Img src="images/img_vector_blue_gray_900_01.svg" alt="vector" className="h-[7px]" />
                        </div>
                        <Img src="images/img_vector_blue_gray_900_01_17x52.svg" alt="vector" className="h-[17px]" />
                      </div>
                    </div>
                    <Img
                      src="images/img_speech_bubble.svg"
                      alt="speechbubble"
                      className="h-[60px] left-0 top-[31%] m-auto absolute"
                    />
                    <Img
                      src="images/img_character.svg"
                      alt="character_one"
                      className="h-[287px] bottom-0 left-[8%] m-auto absolute"
                    />
                  </div>
                  <Img src="images/img_vector_blue_gray_900_01_1x320.svg" alt="vector" className="h-px z-[1]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[47%] md:w-full mr-[139px] gap-8 md:mr-5">
                <div className="flex flex-col items-center justify-start gap-4">
                  <Heading size="md" as="h2">
                    How to design your site footer like we did
                  </Heading>
                  <Text size="s" as="p" className="!leading-5">
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie,
                    massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis.
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In
                    euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo
                    faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero.
                    Donec consectetur faucibus ipsum id gravida.
                  </Text>
                </div>
                <a
                  href="#"
                  className="flex justify-center items-center w-[23%] h-[52px] px-8 py-4 sm:px-5 bg-green-500 rounded"
                >
                  <Text as="p" className="!text-white-A700 text-center !font-medium">
                    Learn More
                  </Text>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-center items-center w-full gap-[78px] p-8 md:gap-10 sm:p-5 bg-gray-100_01">
            <Img
              src="images/img_image_9.png"
              alt="imagenine_one"
              className="w-[326px] md:h-auto object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-8">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Text as="p" className="!font-medium !leading-6">
                  Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus
                  tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida
                  enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie
                  mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
                  eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae
                  placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id.
                  Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                </Text>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading as="h2" className="!text-green-500">
                    Tim Smith
                  </Heading>
                  <Text as="p" className="!text-blue_gray-400">
                    British Dragon Boat Racing Association
                  </Text>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-start items-center w-full gap-8 md:gap-5">
                <div className="flex flex-row justify-between w-[66%] md:w-full">
                  <Button color="green_50" size="sm" shape="round" className="w-[48px]">
                    <Img src="images/img_logo.svg" />
                  </Button>
                  <Button color="gray_100_01" size="sm" shape="round" className="w-[48px]">
                    <Img src="images/img_logo_blue_gray_800_01.svg" />
                  </Button>
                  <Img src="images/img_logo_gray_100_01.svg" alt="logo_five" className="h-[48px] w-[48px] rounded-lg" />
                  <Img
                    src="images/img_logo_gray_100_01_48x48.svg"
                    alt="logo_seven"
                    className="h-[48px] w-[48px] rounded-lg"
                  />
                  <Img src="images/img_logo_48x48.svg" alt="logo_nine" className="h-[48px] w-[48px] rounded-lg" />
                  <Img src="images/img_logo_1.svg" alt="logo_eleven" className="h-[48px] w-[48px] rounded-lg" />
                </div>
                <div className="flex flex-row justify-start items-center w-[30%] md:w-full pl-2 gap-[11px] py-2">
                  <Heading as="h3" className="my-px !text-green-500">
                    Meet all customers
                  </Heading>
                  <Img
                    src="images/img_24_arrows_directions_right.svg"
                    alt="24arrows_one"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-4">
            <div className="flex flex-col items-center justify-start w-full pt-[3px] gap-1 px-[3px] md:px-5 max-w-[1110px]">
              <Heading size="md" as="h2" className="text-center">
                Caring is the new marketing
              </Heading>
              <Text as="p" className="w-[57%] text-center !leading-6">
                The Nexcent blog is the best place to read about the latest membership insights, trends and more. See
                who&#39;s joining the community, read about how our community are increasing their membership income and
                lot&#39;s more.​
              </Text>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-6 md:px-5 max-w-6xl">
              <div className="flex flex-row justify-center w-[32%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    src="images/img_image_18.png"
                    alt="imageeighteen"
                    className="w-full md:h-auto sm:w-full object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-center justify-start w-[87%] mt-[-96px] gap-4 p-4 bg-gray-100_01 shadow-sm rounded-lg">
                    <Heading as="h3" className="!text-gray-600 text-center !leading-7">
                      Creating Streamlined Safeguarding Processes with OneRen
                    </Heading>
                    <div className="flex flex-row justify-center items-center w-full gap-2 p-[9px]">
                      <Heading as="h4" className="!text-green-500">
                        Readmore
                      </Heading>
                      <Img
                        src="images/img_24_arrows_directions_right.svg"
                        alt="readmore_two"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[32%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    src="images/img_image_19.png"
                    alt="imagenineteen"
                    className="w-full md:h-auto sm:w-full object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-center justify-start w-[87%] mt-[-96px] gap-4 p-4 bg-gray-100_01 shadow-sm rounded-lg">
                    <Heading as="h5" className="!text-gray-600 text-center !leading-7">
                      What are your safeguarding responsibilities and how can you manage them?
                    </Heading>
                    <div className="flex flex-row justify-center items-center w-full gap-2 p-[9px]">
                      <Heading as="h6" className="!text-green-500">
                        Readmore
                      </Heading>
                      <Img
                        src="images/img_24_arrows_directions_right.svg"
                        alt="24arrows_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[32%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    src="images/img_image_20.png"
                    alt="imagetwenty_one"
                    className="w-full md:h-auto sm:w-full object-cover rounded-lg"
                  />
                  <div className="flex flex-col items-center justify-start w-[87%] mt-[-96px] gap-4 p-4 bg-gray-100_01 shadow-sm rounded-lg">
                    <Heading as="h5" className="!text-gray-600 text-center !leading-7">
                      Revamping the Membership Model with Triathlon Australia
                    </Heading>
                    <div className="flex flex-row justify-center items-center w-full gap-2 p-[9px]">
                      <Heading as="h5" className="!text-green-500">
                        Readmore
                      </Heading>
                      <Img
                        src="images/img_24_arrows_directions_right.svg"
                        alt="24arrows_one"
                        className="h-[24px] w-[24px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[94px]">
          <div className="flex flex-col items-center justify-start w-full gap-8 p-8 sm:p-5 bg-gray-100_01">
            <Heading size="lg" as="h2" className="w-[65%] !text-blue_gray-900_01 text-center">
              Pellentesque suscipit fringilla libero eu.
            </Heading>
            <Button
              color="green_500"
              size="md"
              rightIcon={<Img src="images/img_16_arrows_directions_right.svg" alt="16/Arrows & Directions/Right" />}
              className="gap-2 sm:px-5 font-medium min-w-[178px] rounded sm:min-w-full"
            >
              Get a Demo
            </Button>
          </div>
          <footer className="flex justify-center items-center w-full px-14 py-16 md:p-5 bg-blue_gray-900_01">
            <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 max-w-[1110px]">
              <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-10">
                <div className="flex flex-row justify-start items-center gap-[9px]">
                  <Img src="images/img_icon_white_a700.svg" alt="icon_three" className="h-[29px]" />
                  <Img src="images/img_nexcent_white_a700.svg" alt="nexcent_three" className="h-[25px]" />
                </div>
                <div className="flex flex-col items-start justify-start w-full gap-2.5">
                  <Text size="s" as="p" className="!text-gray-100_01">
                    Copyright © 2020 Nexcent ltd.
                  </Text>
                  <a href="#">
                    <Text size="s" as="p" className="!text-gray-100_01">
                      All rights reserved
                    </Text>
                  </a>
                </div>
                <div className="flex flex-row justify-start gap-4">
                  <Button shape="circle" className="w-[32px]">
                    <Img src="images/img_social_icons.svg" />
                  </Button>
                  <Button shape="circle" className="w-[32px]">
                    <Img src="images/img_social_icons_white_a700.svg" />
                  </Button>
                  <Button shape="circle" className="w-[32px]">
                    <Img src="images/img_social_icons_white_a700_32x32.svg" />
                  </Button>
                  <Button shape="circle" className="w-[32px]">
                    <Img src="images/img_path.svg" />
                  </Button>
                </div>
              </div>
              <div className="flex flex-row sm:flex-col justify-start items-center w-[58%] md:w-full gap-[30px] sm:gap-5">
                <div className="flex flex-col items-start justify-center w-[26%] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                    <a href="#">
                      <Heading as="h5" className="!text-white-A700">
                        Company
                      </Heading>
                    </a>
                    <ul className="flex flex-col items-start justify-start w-full gap-3.5">
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            About us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Blog
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Contact us
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Pricing
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Testimonials
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-[26%] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                    <a href="#">
                      <Heading as="h5" className="!text-white-A700">
                        Support
                      </Heading>
                    </a>
                    <ul className="flex flex-col items-start justify-center w-full gap-3.5">
                      <li>
                        <a href="#" className="mt-px">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Help center
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Terms of service
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Legal
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Privacy policy
                          </Text>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Text size="s" as="p" className="!text-gray-100_01">
                            Status
                          </Text>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[41%] sm:w-full pt-[3px] gap-[23px]">
                  <Heading as="h5" className="!text-white-A700">
                    Stay up to date
                  </Heading>
                  <Input
                    shape="round"
                    type="email"
                    name="date"
                    placeholder="Your email address"
                    suffix={<Img src="images/img_essential_icons_send.svg" alt="Essential Icons / send" />}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
