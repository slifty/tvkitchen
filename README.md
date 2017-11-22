# TV Kitchen

The TV Kitchen is a suite of video tools designed to ingest video
streams, extract data, and create a locally useful content archive from
that data.

The specific architecture is TBD, but it will likely involve a network of
"modules" (kitchen appliances??) that all fit into a content pipeline.

Lets see how this goes.

## Installing
Check out [INSTALL.md](INSTALL.md) for detailed instructions on how to
set up a kitchen of your own.

This project is being built to run on Ubuntu Server 16.4 LTS; no promises
that it will work anywhere else at this point.

## Dependencies
Running a TV kitchen will require:

1. Access to a video stream, for now this is being built to run against
the content output by an [HD Home Run](http://silicondust.com) device.

2. A dedicated computer running Ubuntu Server 16.4 LTS.  The kitchen is
going to be doing uninterrupted signal processing; it's recommended to
not run this on a machine that will be used for anything else.  We're
developing it using [this little guy](https://www.newegg.com/Product/Product.aspx?Item=9SIAB945742240)

## Contributing
Hopefully this will become a community project.  For now please feel
free to make PRs; to increase the odds of a PR being accepted please
open an issue first to describe the goals -- be it a fix, a feature,
or something else.

